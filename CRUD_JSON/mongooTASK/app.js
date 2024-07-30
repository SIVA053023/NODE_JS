import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'
import morgan from 'morgan'
import mongoose from 'mongoose'
import product from './routing/empRouter.js'

let app=express()
app.use(morgan('dev'))
app.use(express.json())
app.use(urlencoded({extended:true}))

dotenv.config({path:'./config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME
let dburl=process.env.mongo_url

app.use('/prod',product)

mongoose.connect(dburl,{})
.then(()=>{
    console.log("mongodb runnning successfully")
}).catch((err)=>{
  process.exit(1)
})
app.listen(port,hostname,(err)=>{
    console.log(`server running successfully http://${hostname}:${port}/`)
})