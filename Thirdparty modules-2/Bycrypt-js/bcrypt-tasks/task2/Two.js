import dotenv from 'dotenv';
import express from 'express';
import chalk from 'chalk';
import path from 'path';
let user= express()
dotenv.config({path:'./dev.env'})
let port=process.env.port
let hostname=process.env.HOST_NAME
// user.get('/',(req,resp)=>{
//     resp.sendFile(path.join(process.cwd(),'html','index.html'),(err)=>{
//         if(err) throw err
//     })
// })
// user.get('/about',(req,resp)=>{
//     resp.sendFile(path.join(process.cwd(),'notes.txt'),(err)=>{
//         if(err) throw err
//     })
// })
// user.get('/',(req,resp)=>{
//     let filepath=path.resolve(__dirname,'..','..','..','notes.txt')
//     resp.sendFile(filepath,(err)=>{
//         if (err) throw err
        
//     })
// })
user.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, '..', '..', '..', '..', 'notes.txt');
    res.sendFile(filePath);
  });
// user.get('/',(req,resp)=>{
//     resp.send("Hellow world")
// })


user.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log(chalk.bgRed(`server running http://${hostname}:${port}/`))
})