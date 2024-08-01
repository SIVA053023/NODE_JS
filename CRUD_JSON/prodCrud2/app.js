import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import dotenv from 'dotenv';
import cors from 'cors';
import MarRouter from './routing/marketRouter.js'
// import { urlencoded } from 'body-parser';
import mongoose from 'mongoose';

let app=express();
app.use(morgan('dev'))
app.use(express.json())
//app.use(urlencoded({extended:true}))
app.use('/market',MarRouter)
app.use(cors())
app.get('/',(req,resp)=>{
    return resp.status(300).json({"msg":"it is a root request"})
})

dotenv.config({path:'./Config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME
let dburl=process.env.mongo_url
mongoose.connect(dburl)
.then(()=>{
    console.log("mongo server running successfully")
}).catch((err)=>{
          return resp.status(500).json({"err":err.message})
})

app.listen(port,hostname,(err)=>{
    console.log(chalk.bgBlue(`server running http://${hostname}:${port}/`))
})


