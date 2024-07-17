import express, { json } from 'express';
import fs from 'fs';
import { get } from 'http';

let router=express.Router();

router.delete("/delete/:id",async(req,resp)=>{
    let emp_id=req.params.id;
    console.log(emp_id)
    let employees= await get_employees();
    console.log(employees.length)
    let flag=employees.find((emp)=>{
          return emp.eid==emp_id;
    })
    console.log(flag)
    if(!flag){
        return resp.status(401).json({"err":"user does't exist"})
    }
    // employees.push(eid) it does't work to get thr remainitg elements in a json file
    let remaining_emp=employees.filter((emp)=>{
             return emp.eid !=emp_id
    })
    saveEmployees(remaining_emp)
    return resp.status(200).json({"msg":"successfully deleted"})
})



//here  i am using the PUT method for updating the json file
router.put('/update/:id',async(req,resp)=>{
    let emp_id=req.params.id
    let emp_obj=req.body
    let employees= await get_employees();
    let flag=employees.find((emp)=>{
           emp.eid==emp_id;
    })
    if(!flag){
        return resp.status(200).json({"err":"user Already exist"})
    }
    // employees.push(eid) it does't work to get thr remainitg elements in a json file
    let remaining_emp=employees.filter((emp)=>{
             return emp.eid!=eid
    })
    saveEmployees(remaining_emp)
    return resp.status.json({"msg":"successfully updated"})
})


router.get('/read',(req,resp)=>{
     let employees= get_employees()
     return resp.status(200).json(employees)
})


let saveEmployees=((employees)=>{
    fs.writeFileSync('data.json',JSON.stringify(employees))
})

let get_employees=()=>{
    let employees=fs.readFileSync('data.json','utf-8')
    return JSON.parse(employees)
}

export default router