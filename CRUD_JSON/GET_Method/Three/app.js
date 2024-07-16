import express from 'express'
import chalk from 'chalk'
import morgan from 'morgan'

import user from './routing/user.js'
import dotenv from 'dotenv'
let app =express();
app.use(morgan('dev'))
dotenv.config({path:'./Config/dev.env'})
app.get('/',(req,resp)=>{
    resp.send("server running successfully")
})
app.use('/user',user)


let port= process.env.PORT
let hostname=process.env.HOST_NAME
app.listen(port,hostname,(err)=>{
    console.log(chalk.bgBlue(`server running http://${hostname}:${port}/`))
})