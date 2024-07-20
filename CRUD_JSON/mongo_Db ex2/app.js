 import express from 'express'
 import dotenv from 'dotenv';
import morgan from 'morgan';
import chalk from 'chalk';
import mongoose from 'mongoose';
import empRouter from './routing/empRouter.js'


let app=express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(morgan('dev'))

app.use('/emp',empRouter)

app.get('/',(req,resp)=>{
     resp.send("server successfully running")
})

dotenv.config({path:'./Config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME


mongoose.connect(process.env.MONGO_LOCAL_URl,{
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then((response)=>{
    console.log("mongoDb connected successfully")
}).catch((err)=>{
    console.log(err),
    process.exit(1)
})

app.listen(port,hostname,(err)=>{
    console.log((`server running http://${hostname}:${port}/`))
})
 

