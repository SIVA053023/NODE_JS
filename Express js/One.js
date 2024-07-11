import http from 'http';
import path from 'path';
import express  from 'express';
let Siva= express()
Siva.get('/',(req,resp)=>{
      resp.sendFile(path.join(process.cwd(),'Staticweb','/index.html'),(err)=>{
        if(err) throw err
      })
})
Siva.listen(8989,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server running http://localhost:8989`)
}); 
