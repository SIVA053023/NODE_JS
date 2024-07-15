import express from 'express'
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config({path:'./Config/dev.env'})
let app=express()

let port=process.env.PORT
let hostname=process.env.HOST_NAME

app.listen(port,hostname,(err)=>{
    if (err) throw err
    console.log(`server running http://${hostname}:${port}/`)
})