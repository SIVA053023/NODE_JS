import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import chalk from 'chalk';
let app= express()
app.use(morgan('dev'))

dotenv.config({path:'./config/config.env'})

app.get('/',(req,resp)=>{

    resp.sendFile(path.join(process.cwd(),'web','index.html'),(err)=>{
        if(err) throw err
    })
})
app.get('/index',(req,resp)=>{

    resp.sendFile(path.join(process.cwd(),'web','index.html'),(err)=>{
        if(err) throw err
    })
})
app.get('/about',(req,resp)=>{

    resp.sendFile(path.join(process.cwd(),'web','about.html'),(err)=>{
        if(err) throw err
    })
})
app.get('/services',(req,resp)=>{

    resp.sendFile(path.join(process.cwd(),'web','services.html'),(err)=>{
        if (err) throw err;
    })
})
app.get('/contact',(req,resp)=>{

    resp.sendFile(path.join(process.cwd(),'web','contact.html'),(err)=>{
        if(err) throw err
    })
})
let port =process.env.PORT
let hostname= process.env.HOST_NAME
app.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log( chalk.bgBlue(`server running http://${hostname}:${port}/`))
})