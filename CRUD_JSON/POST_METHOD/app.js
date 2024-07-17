import express from 'express';
import morgan from 'morgan'
import chalk from 'chalk'
import empRouter from './routing/empRouter.js'
import dotenv from 'dotenv'

let app=express()
app.use(express.json())
app.use(morgan('tiny'))
dotenv.config({path:'./Config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME
app.get('/',(req,resp)=>{
    resp.send("server created successfully")
})
app.use('/emp',empRouter)

app.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log(`server running http://${hostname}:${port}/`)
})
