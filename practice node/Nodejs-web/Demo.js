import fs from 'fs';
import http from 'http';    // using the Es6
import path from 'path';
let server=http.createServer((req,resp)=>{
    if(req.url==='/' || req.url==='/index'){
        fs.readFile(path.join(process.cwd(),'html','index.html'),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data);
        })
    }
   else if( req.url==='/about'){
        fs.readFile(path.join(process.cwd(),'html','about.html'),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data);
        })
    }
   else if( req.url==='/services'){
        fs.readFile(path.join(process.cwd(),'html','services.html'),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data);
        })
    }
     else if( req.url==='/contact'){
        fs.readFile(path.join(process.cwd(),'html','contact.html'),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data);
        })
    }
    else{
        resp.end("page not found")
    }
    
})
server.listen(5623,'127.0.0.1',(err)=>{
    if (err) throw err
    console.log(`server created successfully http://localhost:5623/`)
})
