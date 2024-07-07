import path from 'path';
import fs from 'fs';
import { cwd } from 'process';

let read=path.join(process.cwd(),"Ok","data.txt");
fs.readFile(read,'utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data)
})