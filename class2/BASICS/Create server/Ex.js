import fs from 'fs';
import http from 'http';
let Ex=http.createServer((req,resp)=>{
    console.log(req.url);
    fs.readFile('Ex.html','utf-8',(err,data)=>{
        if(err) throw err;
        console.log(data);
    })
})
Ex.listen(5656,'127.0.0.1',(err)=>{
    if (err) throw err;
    console.log(`server running successfully http://localhost5656`)

})