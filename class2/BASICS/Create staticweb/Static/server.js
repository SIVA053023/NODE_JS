import fs from 'fs';
import path from 'path';
import http from 'http';
let server=http.createServer((req,resp)=>{
    if(req.url==='/' || req.url==='/index'){
        fs.readFile(path.join(process.cwd(),"web","html","index.html"),'utf-8',(err,data)=>{
            if(err) throw err;
            // console.log(data)
            resp.end(data)
        })

    }
    else if(req.url==='/about'){
        fs.readFile(path.join(process.cwd(),"web","html","about.html"),'utf-8',(err,data)=>{
            if(err) throw err;
            // console.log(data)
            resp.end(data)
        })
        
    }
   else if(req.url==='/service'){
        fs.readFile(path.join(process.cwd(),"web","html","service.html"),'utf-8',(err,data)=>{
            if(err) throw err;
            // console.log(data)
            resp.end(data)
        })
    }
    else if(req.url==='/contact'){
        fs.readFile(path.join(process.cwd(),"web","html","contact.html"),'utf-8',(err,data)=>{
            if(err) throw err;
            // console.log(data)
            resp.end(data)
        })
   
    }
    else{
        resp.end("page not found")
    }

  
    
})
server.listen(6301,'127.0.0.1',(err)=>{
    if (err) throw err
    console.log(`sever is running  http://localhost:6301/`)
})