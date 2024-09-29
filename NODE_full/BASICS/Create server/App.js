import { createServer } from 'http'
import { readFile } from 'fs'
let server=createServer((req,resp)=>{
    console.log(req.url)
    readFile('index.html','utf-8',(err,data)=>{
        if(err) throw err
        resp.end(data)
    })
    
})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Running http://localhost:8080`)
})

