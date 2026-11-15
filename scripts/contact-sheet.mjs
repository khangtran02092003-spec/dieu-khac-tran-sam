import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const raw = process.argv[2], out = process.argv[3]; fs.mkdirSync(out,{recursive:true});
for (const cat of fs.readdirSync(raw).filter(d=>fs.statSync(path.join(raw,d)).isDirectory())) {
  const files = fs.readdirSync(path.join(raw,cat)).filter(f=>/\.(jpe?g|png)$/i.test(f)).sort();
  const T=260, cols=6, rows=Math.ceil(files.length/cols);
  const tiles = await Promise.all(files.map(async (f,i)=>{
    const img = await sharp(path.join(raw,cat,f)).rotate().resize(T,T,{fit:'contain',background:'#222'}).toBuffer();
    const label = Buffer.from(`<svg width="${T}" height="30"><rect width="${T}" height="30" fill="#000" opacity=".75"/><text x="6" y="21" font-size="18" fill="#fff" font-family="Arial">${f.replace(/\.\w+$/,'')}</text></svg>`);
    return [{input:img,left:(i%cols)*T,top:Math.floor(i/cols)*(T+30)+30},{input:label,left:(i%cols)*T,top:Math.floor(i/cols)*(T+30)}];
  }));
  await sharp({create:{width:cols*T,height:rows*(T+30),channels:3,background:'#111'}}).composite(tiles.flat()).jpeg({quality:70}).toFile(path.join(out,cat+'.jpg'));
  console.log(cat, files.length);
}
