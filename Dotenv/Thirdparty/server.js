const http = require ('http')
const dotenv= require('dotenv')
dotenv.config({path:'./config2/dev.env'})
let port = process.env.port
let hostname=process.env.HOST_NAME
// console.log(port);
// console.log(hostname);
let server= http.createServer((req,resp)=>{
    resp.end("Http server.........!!");
})
server.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log(`serveris running http://${hostname}:${port}/`)
})