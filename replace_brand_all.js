const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname);
const exts = new Set(['.js','.jsx','.ts','.tsx','.json','.md','.txt','.html','.css','.scss','.yml','.yaml','.env','.jsonl','.xml']);
let updated=0;
function walk(dir){
  const entries = fs.readdirSync(dir,{withFileTypes:true});
  for(const ent of entries){
    const full = path.join(dir, ent.name);
    if(ent.isDirectory()){
      if(['node_modules','.git'].includes(ent.name)) continue;
      walk(full);
    } else if(ent.isFile()){
      const ext = path.extname(ent.name).toLowerCase();
      if(!exts.has(ext)) continue;
      let text = fs.readFileSync(full,'utf8');
      const newText = text.split('Floyd School').join('Floyd School')
                         .split('FLOYD SCHOOL').join('FLOYD SCHOOL')
                         .split('floydschool').join('floydschool')
                         .split('floydschool.in').join('floydschool.in')
                         .split('floydschool-root').join('floyd-school-root')
                         .split('floydschool-main').join('floydschool-main')
                         .split('floydschool-').join('floydschool-');
      if(newText !== text){
        fs.writeFileSync(full,newText,'utf8');
        console.log('UPDATED:', full);
        updated++;
      }
    }
  }
}
try{
  walk(root);
  console.log('Done. Files updated:', updated);
} catch(e){
  console.error(e);
  process.exit(1);
}
