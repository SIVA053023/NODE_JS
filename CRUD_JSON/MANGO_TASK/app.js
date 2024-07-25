import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import dotenv from 'dotenv'
import empRouter from './routing/empRouter.js'
import mongoose from 'mongoose'

let app=express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/emp',empRouter)

dotenv.config({path:'./Config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME

let mongo=mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
.then((response)=>{
     console.log("server running successfully")
}).catch((err)=>{
console.log(err);
process.exit(1)
})
app.get('/',(req,resp)=>{
    resp.send("server running successfully  ")
})

app.listen(port,hostname,(err)=>{
    console.log(`server running http://${hostname}:${port}/`)
})