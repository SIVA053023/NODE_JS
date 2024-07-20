import express from 'express';
import EmployeeModel from '../models/employee.js'

let router=express.Router();

router.get('/',(req,resp)=>{
    return resp.send("root request")
})

router.get('/read',(req,resp)=>{
    try{
        let employees=EmployeeModel.find();
    return resp.status(200).json(employees)
    }
    catch{
        return resp.send({"error message":err.messssage})
    }
})

router.post('/create', async(req,resp)=>{
   try{
    let emp_data=req.body
    let employees=await EmployeeModel.findOne({eid:emp_data.eid})
    if(employees){
        return resp.status(230).json({"Err":"Employee Already exist"})
    }
    employees=new EmployeeModel(emp_data)
    await employees.save()
    return resp.status(400).json({"Msg":"Employee created successfully"})

   } 
   catch{
            return resp.status(120).json({"Err":err.message})
   }
})

export default router