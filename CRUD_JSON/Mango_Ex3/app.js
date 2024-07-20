import express, { response } from 'express'
import chalk from 'chalk'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import empRouter from './routing/empRouter.js'

let app=express();
app.use(express.json())
app.use('/emp',empRouter)
dotenv.config({path:'./Config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME

mongoose.connect(process.env.MOngo_LOCAL_URL,{
    // useUnifieldTopology:true,
    // useNewUrlParser:true
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then((response)=>{
    console.log("server running successfully")
}).catch((err)=>{
    console.log(err);
    process.exit(1)
})

app.listen(port,hostname,(err)=>{
    console.log(`server running http://${hostname}:${port}/`)
})