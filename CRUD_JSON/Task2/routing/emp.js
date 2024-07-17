
import express from 'express'
import fs from 'fs'

let router=express.Router();

// reading the data.json
router.get('/read',(req,resp)=>{
  let employees= get_employees();
  return resp.status(456).json(employees)

})
// creating the new employee
router.post('/create',async(req,resp)=>{
      let emp_id=req.body
    let employees= await get_employees()
    let flag=employees.find((emp)=>{
        return emp.id===emp_id
    })
    if(flag){
        return resp.status(530).json({"Err":"Employee Already Exist"})
    }

    employees.push(emp_id)
    saveEmployees(employees)
resp.status(896).json({"msg":"Employee created Successfully"})

})

// deleting the employee
router.delete('/delete/:id',(req,resp)=>{
    let emp_id=req.params.id
})

let saveEmployees=(employees)=>{
    fs.writeFileSync('data.json',JSON.stringify(employees))
}

let get_employees=(()=>{
    let employees=fs.readFileSync('data.json','utf-8')
    return JSON.parse(employees)
})

export default router