
import { log } from 'console';
import express from 'express'
import fs from 'fs'

let router=express.Router();
router.post('/create',async(req,resp)=>{
    
    let emp_data=req.body
    console.log(emp_data)
    let employees=await get_employees()
    let flag=employees.find((emp)=>{
           return emp.eid===emp_data.eid
    })
    if(flag){
        return resp.json({"err":"user already exists"})
    }
    employees.push(emp_data)
    await SaveEmployees(employees);
    return resp.status(200).json({"msg":"new user created successfully created"})

})

  router.get('/read',async(req,resp)=>{
     let employees= await get_employees()
      resp.status(200).json(employees)
  })







let SaveEmployees=(employees)=>{
    fs.writeFileSync('data.json',JSON.stringify(employees))
}

let get_employees=()=>{
    let employees=fs.readFileSync('data.json','utf-8')
    return JSON.parse(employees)
}

export default router