import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import dotenv from 'dotenv'
import empRouter from './routing/empRouter.js'

let app=express()
app.use(express.json())

dotenv.config({path:'./Config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME
app.use('/emp', empRouter)
app.get('/',(req,resp)=>{
    resp.send("server running successfully")
})


app.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log(`server running http://${hostname}:${port}/`)
})