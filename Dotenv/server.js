const http= require ('http');
const dotenv= require ('dotenv');
dotenv.config({path:'./Config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME
let server=http.createServer((req,resp)=>{
    resp.end("server is running")
})
server.listen(port,hostname,(err)=>{
    if(err) throw err;
    console.log(`server running http://${hostname} : ${port}`)
})