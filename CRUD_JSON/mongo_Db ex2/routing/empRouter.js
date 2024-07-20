import express from 'express';
import EmployeeModel from '../models/employee.js'

let router=express.Router();


router.get('/read',async(req,resp)=>{
    let employees= await EmployeeModel.find();
    return resp.status(200).json(employees)
})

router.post('/create',async(req,resp)=>{
   try{ let emp_id=req.body
    let Employees=await EmployeeModel.findOne({eid:emp_id.eid})
    if(Employees){
         return resp.status(560).json({"Msg":"Employee Already Exist"})
    }
    Employees= new EmployeeModel(emp_id)
    await Employees.save()
    return resp.status(400).json({"Msg":"Employee created successfully"})
   }
   catch(err){
         return resp.status(300).json({"Err":err.message})
   }
})

router.put('/update/:id',async (req,resp)=>{
    let emp_id=req.params.id
    let emp=req.body
    let Employees=await EmployeeModel.findOne({eid:emp_id})
    if(!Employees){
        return resp.status(560).json({"Err":"Employee not exist"})
    }
    await EmployeeModel.findByIdAndUpdate(Employees._id,{$set:{ename:emp.ename,esal:emp.esal}})
    return resp.status(230).json({"Msg":"Employee updated successfully"})
})
export default router