import express from 'express'
import mongoose, { set } from  'mongoose'
import model from '../models/employee.js'

let router=express.Router()

router.get('/',(req,resp)=>{

        resp.send("root request")    
})

router.get('/read',async (req,resp)=>{
    try{
        let employees=await model.find();
    return resp.json(employees)
    }
    catch{
        return resp.status(450).json({"err":err.message})
    }
})

router.post('/create',async(req,resp)=>{
    try{
        let emp_data=req.body
        let employees=await model.findOne({eid:emp_data.eid});
        if(employees){
            return resp.status(401).json({"err":"employee already exist"})
        }
        employees=new model(emp_data)
        console.log(employees)
        await employees.save()
        return resp.status(200).json(employees)
    }
    catch{
        return resp.status(300).json({"err":err.message})
    }
})

router.put('/update/:id',async (req,resp)=>{
    try{
        let emp_data=req.body
        let emp_id=req.params.id
        let employees=await model.findOne({eid:emp_id})
        if(!employees){
            return resp.status(400).json({"err":"Employee not exists"})
        }
        await model.findByIdAndUpdate(employees._id,{$set:{ename:emp_data.ename,esal:emp_data.esal}})
        console.log(employees)
        await employees.save()
        return resp.status(500).json({"msg":"Employee updated successfully"})

    }
    catch(err){
        console.log(err.message)
    }
})
router.delete('/delete/:id',async (req,resp)=>{
    try{
        let emp_id=req.params.id
        let employees=await model.findOne({eid:emp_id})
        if(!employees){
            return resp.status(799).json({"err":"Employee not exist"})
        }
        await model.findByIdAndDelete(employees._id)
        return resp.status(300).json({"msg":"Employee deleted successfully"})
    }
    catch(err){
        return resp.status(563).json({"err":err.message})
    }
})
export default router