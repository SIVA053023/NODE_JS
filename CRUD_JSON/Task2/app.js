import express from  'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import chalk from 'chalk'
import emp from './routing/emp.js'

let app=express();
app.use(express.json())
app.use(morgan('dev'))
dotenv.config({path:'./Config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME
app.use('/emp',emp)

app.get('/',(req,resp)=>{
    resp.send("Server running successfully")
})

app.listen(port,hostname,(err)=>{
    console.log(`server running http://${hostname}:${port}/`)
})
