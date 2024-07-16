import express from 'express'
import dotenv from 'dotenv'
import empRouter from './routing/empRouter.js'



let app=express()


dotenv.config({path:'./config/dev.config'})

let port=process.env.PORT
let hostname=process.env.HOST_NAME

app.get('/',(req,resp)=>{
    resp.send("server running")
})

app.use('/emp',empRouter)


app.listen(port,hostname,(err)=>{
    console.log(`sever running http://${hostname}:${port}/`)
})
