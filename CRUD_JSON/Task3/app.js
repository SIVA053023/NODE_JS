import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk'
import dotenv from 'dotenv'
import exRouter from './routing/exRouter.js'

let app=express();
app.use(express.json())
app.use(morgan('dev'))

dotenv.config({path:'./Config/dev.env'})
let port= process.env.PORT
let hostname=process.env.HOST_NAME
app.use('/emp',exRouter)
app.get('/',(req,resp)=>{
    resp.send("Server running successfully")
})

app.listen(port,hostname,(req,resp)=>{
    console.log(chalk.bgBlue(`server running http://${hostname}:${port}/`))
})