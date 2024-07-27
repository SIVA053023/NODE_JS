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
router.post('/create',async(req,resp)=>{
   try{
       let emp_body=req.body
       let products=await Product.findOne({name:emp_body})
       if(products){
         return resp.status(200).json({"msg":"product already exist"})
       }
      //  await products.push(emp_body)
      products=await new Product(emp_body)
       products.save();

       return resp.status(300).json({"msg":"Product created successfully"})
   }
   catch(err){
          console.log(err.mesaage)
          process.exit(1)
   }
})


export default router