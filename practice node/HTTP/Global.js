const http =require('http')
let server=http.createServer((req,resp)=>{
    console.log(req.url)
    resp.end("<h1>Welcome to NodeJs world!</h1>")
})

server.listen(8080,'127.0.0.1',(err)=>{
        if(err) throw err 
        console.log("Server is Running https://localhost:8080")
})