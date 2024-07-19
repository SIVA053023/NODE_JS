import express from "express";
import Employeemodel from './model/employee.js';

let router=express.Router()

router.get('/',(req,resp)=>{
    resp.send("root request")
})

router.get('/read',async(req,resp)=>{
try{
 let employees=await Employeemodel.find();
 return resp.status(300).json(employees)
}
catch{
    return resp.status(200).json({"Err_msg":err.message})
}
})

router.post('create',(req,resp)=>{
    try{
        let emp_id=req.body
        let employees=Employeemodel.find();
        let flag=employees.find
    }
    catch{}
})

