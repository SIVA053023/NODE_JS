import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import chalk from 'chalk'
import router from './routing/empRouter.js'

let app=express()
app.use(express.json())
app.use(morgan())

dotenv.config({path:'./Config/dev.env'})

let port=process.env.PORT
let hostname=process.env.HOST_NAME

app.get('/',(req,resp)=>{
    resp.send("server running successfully")
})
app.use('/emp',router)

app.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log(chalk.magenta(`server running successfully http://${hostname}:${port}/`))
})

