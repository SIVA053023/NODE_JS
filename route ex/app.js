import express from 'express'
import dotenv from 'dotenv';
import morgan from 'morgan';
import user from './routing/user.js'
import prod from './routing/prod.js'

// dotenv.config({path:'./config/dev.env'})
let app=express()

// let port=process.env.PORT
// let hostname=process.env.HOST_NAME
app.use('/user',user);
app.use('/prod',prod)


app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server running http://localhost:8080/`)
})