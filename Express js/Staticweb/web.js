import http from 'http';
import path from 'path';
import express from 'express';
let web= express();
web.get('/index.html',(req,resp)=>{
    req.url
    resp.sendFile(path.join(process.cwd(),'html','index.html'),(err)=>{
        if(err) throw err
    })
})
web.get('/about.html',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','about.html'),(err)=>{
        if(err) throw err
    })
})
web.get('/services.html',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','services.html'),(err)=>{
        if(err) throw err
    })
})
web.get('/contact.html',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','contact.html'),(err)=>{
        if(err) throw err
    })
})
web.listen(7894,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server is running http://localhost:7894/`)
})