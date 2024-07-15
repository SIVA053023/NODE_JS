import express from 'express'
import morgan from  'morgan';
import chalk from 'chalk';
import dotenv from 'dotenv';
import user from './routing/emp.js'
let app= express();
app.use(morgan('dev'));
dotenv.config({path:'./Config/dev.env'});
let port=process.env.PORT
let hostname=process.env.HOST_NAME
app.use('/user',user)
app.listen(port,hostname,(err)=>{
    if (err) throw err
    console.log(`server running http://${hostname}:${port}/`)
})
