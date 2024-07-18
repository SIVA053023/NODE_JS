import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
// import mangodb from 'mangodb'
import mongoose from 'mongoose'
import empRouter from './routing/empRouter.js'
import Employee from '../model/employee.js'

let app=express()

app.use(morgan('dev'))
dotenv.config({path:'./Config/dev.env'})

let port=process.env.port
let hostname=process.env.HOST_NAME
let dburl=process.env.MANGO_local_url





mongoose.connect(dburl,{})
app.listen(port,hostname)