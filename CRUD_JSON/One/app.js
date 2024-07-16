import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import dotenv from 'dotenv'
import empRouter from './routing/empRouting.js'
let app=express();
app.use(morgan('dev'))
dotenv.config({path:'./Config/dev.config'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME
    app.use("/emp",empRouter)
app.get('/',(req,resp)=>{
    resp.json({"msg":"Root request"})
})
app.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log(chalk.bgBlue(`server running http://${hostname}:${port}/`))
})

