
import express from 'express';
import fs from 'fs'

let router=express.Router();

//get the data
router.get('/read',(req,resp)=>{
    let employees=get_employees()
    return resp.status(566).json(employees)

})

// creating the new data
router.post('/create',async(req,resp)=>{
    let emp_id=req.body
    let employees=await get_employees();
    let flag=employees.find((emp)=>{
        return emp.id===emp_id
    })
    if(flag){
        return resp.status(654).json({"Err":"employeee already exist"})
    }
     employees.push(emp_id)
     save_Employeees(employees)
     return resp.status(455).json({"msg":"Employee created successfully"})
})

// deleting the data
router.delete('/delete/:id',async(req,resp)=>{
    let emp_id=req.params.id
    let employees=await get_employees();
    let flag=employees.find((emp)=>{
        return emp.id==emp_id
    })
    if(!flag){
        return resp.status(322).json({"Err":"Employee not found"})
    }
    let remaining_emp=employees.filter((emp)=>{
        return emp.id !=emp_id
    })
    save_Employeees(remaining_emp)
    return resp.status(400).json({"Msg":"Employee deleted successfully"})
})

// updating the data
router.put('/update/:id',async(req,resp)=>{
    let emp_id=req.params.id
    let emp_obj=req.body
    let employees=await get_employees()
    let flag=employees.find((emp)=>{
        return emp.id==emp_id
    })
    if(!flag){
        return resp.status(563).json({"Err":"Employee not exist"})
    }
    let remaining_emp=employees.filter((emp)=>{
        return emp.id!=emp_id
    })
    remaining_emp.unshift(emp_obj)
    save_Employeees(remaining_emp)
    return resp.status(200).json({"Msg":"Employee updated successfully"})
})



let save_Employeees=(employees)=>{
    fs.writeFileSync('data.json',JSON.stringify(employees))
}
let get_employees=(()=>{
  let employees=fs.readFileSync('data.json','utf-8')
  return JSON.parse(employees)
})

export default router