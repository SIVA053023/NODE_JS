import fs from 'fs';
import path from 'path';
let file=path.join(process.cwd(),"Ok","demo.txt")
let Siva=fs.readFileSync(file,'utf-8')
console.log(Siva);