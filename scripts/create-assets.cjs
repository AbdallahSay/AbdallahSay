// MASAR / DIGITAL CRAFT — original static SVG artwork, no external assets.
const fs = require('node:fs');
fs.mkdirSync('assets', {recursive:true});
const palettes = {
  dark: {bg:'#0B1120',surface:'#151D30',text:'#F1F5F9',muted:'#94A3B8',accent:'#67E8F9',violet:'#A78BFA',line:'#344155'},
  light: {bg:'#F8FAFC',surface:'#EEF2F7',text:'#0F172A',muted:'#475569',accent:'#087E91',violet:'#7051B8',line:'#CBD5E1'}
};
const txt = (x,y,size,value,color,attrs='') => `<text x="${x}" y="${y}" fill="${color}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" ${attrs}>${value}</text>`;
function mark(p,x,y,scale=1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})" fill="none">
    <rect x="0" y="0" width="220" height="220" rx="110" stroke="${p.line}"/>
    <path d="M110 0V24M196 42L179 59M220 110H196M110 220V196M0 110H24" stroke="${p.line}"/>
    <path d="M45 165V72Q45 56 57 68L110 121L163 68Q175 56 175 72V152Q175 165 188 165H202" stroke="${p.accent}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M45 184H175" stroke="${p.line}" stroke-dasharray="2 6"/>
    <circle cx="45" cy="165" r="5" fill="${p.bg}" stroke="${p.accent}" stroke-width="2"/>
    <circle cx="202" cy="165" r="5" fill="${p.violet}"/>
  </g>`;
}
for (const [theme,p] of Object.entries(palettes)) {
  for (const mobile of [false,true]) {
    const w=mobile?420:1000,h=mobile?390:370;
    const body=mobile ? `
      ${txt(28,44,16,'MASAR TECH',p.accent,'letter-spacing="2.6"')}
      ${mark(p,315,26,.34)}
      ${txt(26,131,56,'Abdallah',p.text,'font-weight="700" letter-spacing="-2"')}
      ${txt(26,193,56,'Sayed',p.text,'font-weight="700" letter-spacing="-2"')}
      ${txt(28,246,24,'Full-stack software',p.text)}
      ${txt(28,276,24,'developer',p.text)}
      <path d="M28 308H392" stroke="${p.line}"/>
      ${txt(28,343,19,'SaaS · Automation',p.muted)}
      ${txt(28,369,19,'Digital products',p.muted)}` : `
      ${txt(48,52,16,'MASAR TECH',p.accent,'letter-spacing="3"')}
      ${txt(952,52,14,'DIGITAL CRAFT /',p.muted,'text-anchor="end" letter-spacing="2"')}
      ${txt(45,157,66,'Abdallah Sayed',p.text,'font-weight="700" letter-spacing="-2.5"')}
      ${txt(48,211,27,'Full-stack software developer',p.text)}
      ${txt(48,253,22,'SaaS · Automation · Digital products',p.muted)}
      ${mark(p,714,83,1)}
      <path d="M48 305H660" stroke="${p.line}"/>
      ${txt(48,340,15,'BUILD',p.accent,'letter-spacing="2.3"')}
      ${txt(141,340,15,'/ AUTOMATE / REFINE',p.muted,'letter-spacing="2.3"')}`;
    fs.writeFileSync(`assets/hero-${theme}${mobile?'-mobile':''}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title desc">
<title id="title">Abdallah Sayed — Full-stack software developer</title>
<desc id="desc">Masar Tech. SaaS, automation and digital products. An original geometric M follows a continuous path, representing thoughtful engineering and forward movement.</desc>
<rect width="${w}" height="${h}" rx="8" fill="${p.bg}"/>
${body}
</svg>\n`);
  }
}
console.log('Created desktop and mobile heroes in both themes.');
