/*const fs =require ('fs');                // ES_5 Syntax Sync
let data= fs.readFileSync('data.txt','utf-8')
console.log(data)*/
import fs from 'fs'                           // ES-6 syntax
let data=fs.readFileSync('data.txt','utf-8')
console.log(data)