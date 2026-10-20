// Capture the actual hosted feature-branch README. No injected page CSS or mock markup.
const fs=require('node:fs');
const {chromium}=require('playwright');
const sharp=require('sharp');
const url=process.env.PROFILE_REVIEW_URL || 'https://github.com/AbdallahSay/AbdallahSay/blob/feat/masar-digital-craft/README.md';
const exe=process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const out='docs/previews';fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({executablePath:exe,headless:true});
 const results=[];
 try{
  for(const theme of ['light','dark']){
   for(const [device,width,height] of [['desktop',1440,1050],['mobile',390,844],['narrow',320,780]]){
    const context=await browser.newContext({viewport:{width,height},colorScheme:theme,deviceScaleFactor:1,reducedMotion:'reduce'});
    const page=await context.newPage();
    await page.goto(url,{waitUntil:'networkidle',timeout:60000});
    const article=page.locator('article.markdown-body').first();
    await article.waitFor({timeout:30000});
    await article.locator('picture img:visible').evaluate(async img=>{await img.decode();});
    const result=await article.evaluate(el=>{
      const img=[...el.querySelectorAll('picture img')].find(i=>i.getClientRects().length>0);const box=el.getBoundingClientRect();
      return {title:document.title,githubColorMode:document.documentElement.getAttribute('data-color-mode'),pageWidth:innerWidth,pageScrollWidth:document.documentElement.scrollWidth,articleWidth:box.width,articleScrollWidth:el.scrollWidth,imageLoaded:img.complete&&img.naturalWidth>0,imageSource:img.currentSrc,sourceConditions:[...el.querySelectorAll('source')].map(s=>s.media),headings:[...el.querySelectorAll('h1,h2,h3')].map(h=>h.textContent.trim()),linkCount:el.querySelectorAll('a').length};
    });
    if(!result.imageLoaded||result.articleScrollWidth>Math.ceil(result.articleWidth)+1||result.pageScrollWidth>width+1)throw new Error(`Layout/image failure at ${device} ${theme}: ${JSON.stringify(result)}`);
    // Crop from a top-of-page full screenshot. Locator screenshots scroll the
    // article under GitHub's sticky file toolbar and can obscure the hero.
    await page.evaluate(()=>window.scrollTo(0,0));
    const box=await article.boundingBox();
    const full=await page.screenshot({fullPage:true,animations:'disabled'});
    await sharp(full).extract({left:Math.ceil(box.x),top:Math.ceil(box.y),width:Math.floor(box.width),height:Math.floor(box.height)}).png().toFile(`${out}/github-${device}-${theme}.png`);
    if(device!=='narrow')fs.writeFileSync(`${out}/github-${device}-${theme}-context.png`,full);
    results.push({device,theme,url,...result});
    console.log(`${device} ${theme}: ${result.articleWidth}px article, no overflow, ${result.imageSource.split('/').pop()}`);
    await context.close();
   }
  }
  fs.writeFileSync(`${out}/browser-validation.json`,JSON.stringify(results,null,2)+'\n');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
