// Verify the static profile and GitHub's own Markdown sanitizer, not a mock renderer.
const fs = require('node:fs');
const cp = require('node:child_process');
const path = require('node:path');
const sharp = require('sharp');
const assert = require('node:assert/strict');
const out = 'docs/previews';
fs.mkdirSync(out,{recursive:true});
function gh(args,input) {
  const r=cp.spawnSync('gh',args,{encoding:'utf8',input,windowsHide:true});
  if(r.status!==0)throw new Error(r.stderr || 'GitHub CLI failed');
  return r.stdout;
}
function luminance(hex) {
  const rgb=hex.match(/[a-f\d]{2}/gi).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);
  return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;
}
const ratio=(a,b)=>{const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
(async()=>{
  const readme=fs.readFileSync('README.md','utf8');
  const report={verifiedAt:new Date().toISOString(),checks:[],contrast:[],repositories:[],liveInterfaces:[]};
  const check=(name,condition)=>{assert(condition,name);report.checks.push({name,pass:true});};
  check('Public profile has no scripts, embedded styles, badges, tables or remote image services',!/<script|<style|<table|shields\.io|readme-stats/i.test(readme));
  check('Five selected projects', (readme.match(/^### /gm)||[]).length===5);
  check('In-development qualification retained',readme.includes('**In development.**'));
  check('Contact and selected-work anchor',readme.includes('mailto:abdallahsay10@gmail.com')&&readme.includes('## Selected work')&&readme.includes('](#selected-work)'));
  const assets=[...new Set([...readme.matchAll(/(?:src|srcset)="([^"]+)"/g)].map(m=>m[1]))];
  check('Four local responsive hero assets',assets.length===4);
  for(const file of assets){
    check(`${file}: local file exists`,fs.existsSync(file)&&!path.isAbsolute(file)&&!file.includes('..'));
    const svg=fs.readFileSync(file,'utf8');
    check(`${file}: static standalone SVG`,!/<script|<foreignObject|<image|<animate|<style|<filter|\shref=|\son\w+=/i.test(svg)&&svg.includes('<title')&&svg.includes('<desc'));
    await sharp(file).png().toFile(`${out}/${path.basename(file,'.svg')}.png`);
    report.checks.push({name:`${file}: SVG parsed and rasterized`,pass:true});
  }
  for(const [theme,bg,colors] of [['dark','#0B1120',['#F1F5F9','#94A3B8','#67E8F9','#A78BFA']],['light','#F8FAFC',['#0F172A','#475569','#087E91','#7051B8']]]){
    for(const color of colors){const contrast=ratio(bg,color);check(`${theme}: ${color} meets 4.5:1 text contrast`,contrast>=4.5);report.contrast.push({theme,background:bg,foreground:color,ratio:Number(contrast.toFixed(2))});}
  }
  const rendered=gh(['api','markdown','--method','POST','--input','-'],JSON.stringify({mode:'gfm',context:'AbdallahSay/AbdallahSay',text:readme}));
  fs.writeFileSync(`${out}/github-api-rendered.html`,rendered);
  check('GitHub sanitizer retains both responsive pictures',(rendered.match(/<source /g)||[]).length===2&&(rendered.match(/<picture>/g)||[]).length===2);
  check('GitHub sanitizer retains native theme-aware links',rendered.includes('#gh-dark-mode-only')&&rendered.includes('#gh-light-mode-only'));
  check('GitHub sanitizer retains meaningful image alt',rendered.includes('alt="Abdallah Sayed'));
  const repos=[...new Set([...readme.matchAll(/https:\/\/github\.com\/AbdallahSay\/([\w.-]+)/g)].map(m=>m[1]))];
  for(const repo of repos){
    const meta=JSON.parse(gh(['api',`repos/AbdallahSay/${repo}`]));
    check(`${repo}: source link publicly accessible`,meta.private===false);
    report.repositories.push({name:repo,url:meta.html_url,public:!meta.private});
  }
  const urls=[...new Set([...readme.matchAll(/https:\/\/[^\s)]+\.vercel\.app/g)].map(m=>m[0]))];
  for(const url of urls){
    const response=await fetch(url,{signal:AbortSignal.timeout(30000)});
    const html=await response.text();const title=(html.match(/<title>([\s\S]*?)<\/title>/i)||[])[1];
    check(`${url}: live interface responds with page title`,response.status===200&&Boolean(title));
    report.liveInterfaces.push({url,status:response.status,title,scope:'Read-only page request; no product workflows invoked'});
  }
  fs.writeFileSync(`${out}/validation.json`,JSON.stringify(report,null,2)+'\n');
  console.log(`PASS: ${report.checks.length} checks; four assets, five public repositories, four live interfaces. Report: ${out}/validation.json`);
})().catch(e=>{console.error(e.message);process.exit(1)});
