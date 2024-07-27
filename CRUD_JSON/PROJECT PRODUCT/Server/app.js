import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'   // http logger or for getting information that user wants to request
import chalk from 'chalk'
import mongoose from 'mongoose'
import cors from 'cors'
 import ProdRouter from './routing/ProductRouter.js'

let app=express()
app.use(morgan('dev'));
app.use(cors())  /// for to integrate with front end
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use('/prod',ProdRouter)
dotenv.config({path:'./config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME

app.get('/',(req,resp)=>{
    resp.send("server running successfully")
})

mongoose.connect(process.env.mongo_url,{
    //  usefiedTopology:true,
    //  useNewUrlParser:true
}).then(()=>{
    console.log("server running successfully")
}).catch((err)=>{
            console.log(err.message)
            process.exit(1)
})

app.listen(port,hostname,(err)=>{
    console.log(chalk.green(`server running http://${hostname}:${port}/`))
})

