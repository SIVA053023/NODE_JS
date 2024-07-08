import http from 'http';
import fs from 'fs';
let One=http.createServer((req,resp)=>{
    console.log(req.url);
    fs.readFile('data.txt','utf-8',(err,data)=>{
        if(err) throw err;
        resp.end(data)
    })
})

  One.listen(5323,'127.0.0.1',(err)=>{
    if(err) throw err;
    console.log(`Server is Running http://localhost:5323`)
  })