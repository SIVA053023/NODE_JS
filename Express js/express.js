import express from 'express';
import emp from './data.js'


let app= express();
// API URL: http://localhost:8080/
app.get("/" ,(req,resp)=>{
    console.log(emp)
    resp.send("hello good morning")
})
app.listen(8080,'127.0.0.1',(err)=>{
    if (err) throw err
    console.log(`server runnung http://localhost:8080/ `)
})