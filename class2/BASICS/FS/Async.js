/*const fs =require ('fs');       // Es_5 Syntax
fs.readFile('data1.txt','utf-8',(err,data)=>{
if(err) throw err
console.log(data)
})

// fs.readFile('filename','utf-8',()=>{})  Syntax*/



// ES_6 Syntax             for ES_6 package.JSON is required

import fs from 'fs'
let data=fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})