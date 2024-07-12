import express from 'express'
// import http from 'http'
import path from 'path'
import morgan from 'morgan'
import chalk from 'chalk';
import dotenv from 'dotenv'


let server=express();
server.use(morgan('dev'));
dotenv.config({path:'./config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME
server.get('/',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','index.html'),(err)=>{
        if(err) throw err
    })
})
server.get('/index',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','index.html'),(err)=>{
        if(err) throw err
    })
})
server.get('/about',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','about.html'),(err)=>{
        if(err) throw err
    })
})
server.get('/services',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','services.html'),(err)=>{
        if(err) throw err
    })
})
server.get('/contact',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','contact.html'),(err)=>{
        if(err) throw err
    })
})

server.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log(chalk.bgRed(`server running http://${hostname}:${port}/`))
})