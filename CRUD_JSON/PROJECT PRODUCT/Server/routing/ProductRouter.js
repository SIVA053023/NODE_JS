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
       let products=await Product.findOne({name:emp_body.name})
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

router.put('/update/:id',async(req,resp)=>{
   try{
      let emp_body=req.body;
      let emp=req.params.id
      let employee=await Product.findOne({name:emp})
      if(!employee){
         return resp.status(200).json({"err":"Employeee doesn't exist"})
      }
      await Product.findByIdAndUpdate(employee._id,{$set:{name:emp_body.name,QTY:emp_body.QTY}})
      return resp.status(450).json({"msg":"Product updated successfully"})
   }
   catch(err){
           return resp.send(err.message)
           process.exit(1)
   }
})

router.delete('/delete/:id', async(req,resp)=>{
      try{
         let emp_id=req.params.id
         let products=await Product.findOne({name:emp_id})
         if(!products){
            return resp.status(400).json({"err":"Product not existed"})
         }
         // await Product.findByIdAndDelete({products._id})
         await Product.findByIdAndDelete(products._id)
         return resp.status(300).json({"msg":"Product deleted successfully"})

      }    
      catch{
             process.exit(1)
      }
})

// get the single product

router.get('/:id',async(req,resp)=>{
   try{
        let pid=req.params.id
        let products=await Product.findById({pid})
        if(!products){
         return resp.status(300).json({"err":"Product not exist"})

        }
        return resp.status(123).json(products)
   }
   catch(err){

   }
})


export default router