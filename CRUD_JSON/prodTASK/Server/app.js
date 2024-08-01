import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import chalk from 'chalk'
import morgan from 'morgan'
import product from './routing/mobileRouter.js'
import cors from 'cors'

let app=express()

app.use(morgan('dev'))
app.use(cors())
app.use('/mobile',product)

dotenv.config({path:'./Config/dev.env'})

let port=process.env.PORT
let hostname=process.env.HOST_NAME
let dburl=process.env.mongo_url

mongoose.connect(dburl)
.then(()=>{
    console.log("mongoDb running successfully")
}).catch((err)=>{
    console.log(err.message)
})

app.listen(port,hostname,()=>{
    console.log(chalk.bgBlue(`server running http://${hostname}:${port}/`))
})

