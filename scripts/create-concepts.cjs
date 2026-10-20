// Original vector studies. Run with Node.js; no dependencies.
const fs = require('node:fs');
const dir = 'docs/concepts';
fs.mkdirSync(dir, {recursive:true});
const shell = (title, body, bg='#F8FAFC') => `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="560" viewBox="0 0 1000 560" role="img" aria-labelledby="title"><title id="title">${title}</title><rect width="1000" height="560" fill="${bg}"/>${body}</svg>`;
const text = (x,y,size,value,fill='#0F172A',extra='') => `<text x="${x}" y="${y}" ${extra.includes('font-family') ? '' : 'font-family="Arial, Helvetica, sans-serif"'} font-size="${size}" fill="${fill}" ${extra}>${value}</text>`;
fs.writeFileSync(`${dir}/a-editorial-minimal.svg`,shell('A — Editorial Minimal',`
<path d="M52 62H948M52 340H948" stroke="#CBD5E1"/>${text(52,45,14,'MASAR / DIGITAL CRAFT','#087E91','letter-spacing="3"')}
${text(52,160,72,'Abdallah Sayed','#0F172A','font-weight="700" letter-spacing="-3"')}
${text(54,213,26,'Full-stack software developer')}${text(54,263,21,'SaaS · Automation · Digital products','#475569')}
${text(54,318,17,'View Portfolio ↗     Explore Projects     Contact','#087E91')}
${text(54,389,16,'SELECTED WORK','#475569','letter-spacing="2"')}
${text(54,438,26,'Factory Quote Generator')}${text(54,475,18,'Document workflows, from data entry to dispatch.','#475569')}
${text(54,518,17,'ASP.NET Core / SQL Server / OpenXML','#087E91')}`));
fs.writeFileSync(`${dir}/b-premium-digital-studio.svg`,shell('B — Premium Digital Studio',`
<rect x="32" y="28" width="936" height="300" rx="8" fill="#151D30"/>
${text(64,73,14,'MASAR TECH / DIGITAL CRAFT','#67E8F9','letter-spacing="3"')}
${text(64,155,62,'Abdallah Sayed','#F1F5F9','font-weight="700" letter-spacing="-2"')}
${text(66,206,24,'Full-stack software developer','#F1F5F9')}${text(66,257,20,'SaaS · Automation · Digital products','#94A3B8')}
<circle cx="809" cy="184" r="94" stroke="#344155" fill="none"/><path d="M740 225V145L788 193L836 145V225" stroke="#67E8F9" stroke-width="3" fill="none"/><circle cx="836" cy="145" r="6" fill="#A78BFA"/>
${text(48,382,17,'View Portfolio ↗     Explore Projects     Contact','#67E8F9')}
${text(48,435,27,'Selected work','#F1F5F9')}${text(48,480,23,'Factory Quote Generator','#F1F5F9')}${text(48,520,18,'Document workflows, from data entry to dispatch.','#94A3B8')}`,'#0B1120'));
fs.writeFileSync(`${dir}/c-technical-signature.svg`,shell('C — Technical / Developer Signature',`
${text(48,60,16,'MASAR / ENGINEERING NOTES','#67E8F9','font-family="monospace" letter-spacing="2"')}
<path d="M48 90H952M48 345H952" stroke="#344155"/>
${text(48,162,18,'01 / identity','#94A3B8','font-family="monospace"')}
${text(48,226,58,'Abdallah Sayed','#F1F5F9','font-weight="700"')}
${text(48,280,24,'Full-stack software developer','#F1F5F9')}
<g fill="none" stroke="#344155"><path d="M720 126H908V284H720ZM720 205H908M814 126V284"/><circle cx="814" cy="205" r="60"/></g>
<path d="M735 266L785 216H844L895 144" fill="none" stroke="#67E8F9" stroke-width="3"/>
${text(48,390,17,'02 / selected_work','#67E8F9','font-family="monospace"')}
${text(48,447,26,'Factory Quote Generator','#F1F5F9')}${text(48,489,18,'ASP.NET Core → SQL Server → OpenXML','#94A3B8')}
${text(48,530,17,'View Portfolio ↗     Explore Projects     Contact','#67E8F9')}`,'#0B1120'));
console.log('Created three original concept previews.');
