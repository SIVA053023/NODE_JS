import { log } from 'console';
import fs from 'fs';
import path from 'path';
// fs.readFile('data.txt','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

// fs.readFile(path.join(process.cwd(),'data_txt','utf-8.txt'),'utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

// let server=fs.readFileSync(path.join(process.cwd(),'data.txt'),'utf-8')
// console.log(server);

let server=fs.readFileSync('data.txt','utf-8')
console.log(server)

// fs.readFile(path.join(process.cwd(),'data.txt'),'utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
