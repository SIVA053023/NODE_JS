import express from 'express'
import Product from '../models/Product.js'

let router=express.Router()


router.get('/',(req,resp)=>{
   resp.send("product root_request")
})

router.get('/read',async(req,resp)=>{
   try{
    let Products=await Product.find();
    return resp.json(Products)
   } 
   catch(err){
          return resp.status(200).json({"msg":err.mesaage})
   }
})


export default router