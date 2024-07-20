import express from 'express'
import EmployeeModel from '../models/employee.js'

let router=express.Router()

router.get('/read',(req,resp)=>{
    let employees=EmployeeModel.find();
    return resp.status(560).json(employees)
})

router.post('/create',async (req,resp)=>{
   try{ let emp_id=req.body
    let employees =EmployeeModel.findOne({eid:emp_id})
    if(employees){
        return resp.status(300).json({"Err":"Employee Already exist"})
    }
    employees= await new EmployeeModel(emp_id)
    employees.save();
    return resp.status(200).json({"Msg":"Employee created successfully"})


}
catch(err){
       return resp.status(401).json({"Err":err.message})
}
})

router.put('/update/:id',async (req,resp)=>{
  try{
    let emp_id=req.params.id
    let emp_data=req.body
    let Employees= await EmployeeModel.findOne({eid:emp_id})
    if(!Employees){
        return resp.status(230).json({"Msg":"Employee Does't exist"})
    }
    await EmployeeModel.findByIdAndUpdate(Employees._id,{$set:{ename:emp_data.ename,esal:emp_data.esal}})
    return resp.status(400).json({"Msg":"Employee updated successfully"})
  } 
  catch(err){
          return resp.status(300).json({"Msg":err.message})
  } 
})

router.delete('/delete/:id',async (req,resp)=>{
   try{ let emp_id=req.params.id
    let Employees=await EmployeeModel.findOne({eid:emp_id})
    if(!Employees){
        return resp.status(120).json({"Err":"Employee not exist "})
    }
    await EmployeeModel.findByIdAndDelete(Employees._id)
    return resp.status(300).json({"Msg":"Emplotyee deleted successfully"})
}
    catch(err){
        return resp.status(100).json({"Err":err.message})
    }
})

export default router