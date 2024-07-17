
import express  from 'express'
import fs from  'fs'

let router=express.Router();


router.get('/read',async(req,resp)=>{
     let employees=await get_employees();
     resp.status(200).json(employees)
})

// router.post('/create',async (req,resp)=>{
//     let emp_id=req.body
//     let employees=await get_employees();
//     let flag=employees.find((emp)=>{
//         return emp.id===emp_id.id
//     })
//     if(flag){
//         return resp.json({"Err":"Employee Already exist"})
//     }
//     employees.push(emp_id)
//     await SaveEmployees(employees);
//     return resp.status(101).json({"msg":"employee created successfully"})
// })
router.post("/create",async(req,resp)=>{
    let emp_Data=req.body;
    console.log(emp_Data);
    let employees=await get_employees();

    let flag =employees.find((emp)=>{
        return emp.eid === emp_Data.eid
    })
    console.log("Flag Value....",flag)
    if(flag){
        return resp.json({"Error":"Employee Alread exist!"})
    }
    employees.push(emp_Data)
    await SaveEmployees(employees);
    return resp.status(200).json({"msg":"new Employee Object created successfully!"})
})



let SaveEmployees=(employees)=>{
    fs.writeFileSync('data.json',JSON.stringify(employees))
}

let get_employees=()=>{
    let employees=fs.readFileSync('data.json','utf-8')
    return JSON.parse(employees)
}

export default router