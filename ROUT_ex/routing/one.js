import express from 'express'
import morgan from  'morgan'
import chalk from 'chalk'
import dotenv from 'dotenv'

let app=express();
let router= express.Router();
router.get("./",(req,resp)=>{
    let data= fs.read  // ok
})