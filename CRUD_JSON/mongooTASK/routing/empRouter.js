import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';
import product from '../model/product.js'


let router=express.Router();

router.get('/',(req,resp)=>{
     resp.send("Employee_router")
})

router.get('/read',async(req,resp)=>{
    try{
        let employee= await  product.find()
        return resp.status(200).json(employee)
    }
    catch(err){
  return resp.status(400).json({"err":err.message})
    }
})


router.post('/create',async(req,resp)=>{
    try{
        let emp_body= req.body
        let employee=await product.findOne({ ename:emp_body})
        if(employee){
            return resp.status(600).json({"msg":"Employee already exist"})
        }
          employee=await product(emp_body)
          employee.save()
         return resp.status(200).json({"msg":"Employee created successfully"})
    }
    catch(err){
  return resp.status(300).json({"err":err.message})
    }
})

router.put('/update/:id',async(req,resp)=>{
    try{
        let emp_body= req.body
        let emp_id= req.params.id
        let employee=await product.findOne({eid:emp_id})
        if(!employee){
            return resp.status(500).json({"msg":"employee not exist"})
        }
        await product.findByIdAndupdate(employee._id,{$set:{ename:emp_body.ename,esal:emp_body.esal,eloc:emp_body.eloc}})
        return resp.status(789).json({"msg":"employee updated succcessfully"})

    }
    catch(err){
             return resp.status(100).json({"err":err.message})
    }
})

router.delete('/delete/:id',async(req,resp)=>{
    try{
        let emp_id=req.params.id
        let employee=await product.findOne({eid:emp_id})
        if(!employee){
            return  resp.status(300).json({"msg":"Employee not exist"})
        }
        await product.findByIdAndDelete(emp_id._id)
        return resp.status(200).json({"msg":"Employee deleted successfully"})
    }
    catch(err){
             return resp.status(120).json({"err":err.message})
    }
    
})
export default router