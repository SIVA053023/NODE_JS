
import express  from 'express'
import fs from  'fs'

let router=express.Router();


router.get('/read',async(req,resp)=>{
     let employees=await get_employees();
     resp.status(200).json(employees)
})


router.post("/create",async(req,resp)=>{
    let emp_Data=req.body;
    console.log(emp_Data);
    let employees=await get_employees();

    let flag =employees.find((emp)=>{
        return emp.id === emp_Data.id
    })
    console.log("Flag Value....",flag)
    if(flag){
        return resp.json({"Error":"Employee Alread exist!"})
    }
    employees.push(emp_Data)
     SaveEmployees(employees);
    return resp.status(200).json({"msg":"new Employee Object created successfully!"})
})

router.delete("/delete/:id",async (req,resp)=>{
    let emp_Id=req.params.id;
    let employees= await get_employees()
   // console.log(emp_Id)
    let flag=employees.find((emp)=>{
        return emp.id == emp_Id;
    })
   // console.log(flag)
    if(!flag){
        return resp.status(401).json({"msg":"Employee Not Exist!"})
    }
    let remaining_Employees=employees.filter((emp)=>{
           return emp.id !=emp_Id;
    })
    SaveEmployees(remaining_Employees)
    return resp.status(200).json({"msg":"deleted successfully"})


})

router.put('/update/:id',async (req,resp)=>{
          let emp_data=req.params.id
          let emp_obj=req.body
          let employees=await get_employees();
          let flag=employees.find((emp)=>{
            return emp.id==emp_data
          })
          if(!flag){
            return resp.status(899).json({"Err":"employee not exist"})
          }
          let remaining_emp=employees.filter((emp)=>{
            return emp.id != emp_data
          })
          remaining_emp.unshift(emp_obj)
          SaveEmployees(remaining_emp)
         return  resp.status(560).json({"msg":"Employee updated successfully"})
})




let SaveEmployees=(employees)=>{
    fs.writeFileSync('data.json',JSON.stringify(employees))
}

let get_employees=()=>{
    let employees=fs.readFileSync('data.json','utf-8')
    return JSON.parse(employees)
}

export default router