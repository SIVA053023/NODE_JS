import express from "express";
import EmployeeModel from '../models/employee.js'
let router=express.Router();

//URL:localhost:8080/emp/
//Method:GET
router.get("/",(req,resp)=>{

    resp.status(200).json({"msg":"Employee Root Request"})  //ok
})

//URL:localhost:8080/emp/read
//GET:GET
router.get("/read", async (req,resp)=>{
    try{
        let employees= await EmployeeModel.find();
        return resp.status(200).json(employees);
    }
    catch(err){
        return resp.status(401).json({"error message":err.message})
    }
   
})
/*
    Usage: create new employee
    URL:http://127.0.0.1:8080/emp/create
    Method:POST
    Req Fields:eid,ename,esal
*/
router.post("/create",async (req,resp)=>{
    try{
        let emp = req.body;
        let Employee=await EmployeeModel.findOne({eid:emp.eid})
        console.log(Employee)
        if(Employee){
            return resp.status(401).json({"msg":"Employee already exits"})
        }
        Employee=new EmployeeModel(emp)
        console.log(Employee)
        await Employee.save();
        return resp.status(200).json({"msg":"Employee created Successufully"})

    }catch(err){
        return resp.status(401).json({"error message":err.message})
    }
       
})

// Update data by using the PUT method

router.put('/update/:id',async(req,resp)=>{
    try{
          let emp_id=req.params.id
          let emp=req.body
          let Employees=await EmployeeModel.findOne({eid:emp_id})
          if(!Employees){
               return resp.status(200).json({"Err":"Employee not exist"})
          }

          await EmployeeModel.findByIdAndUpdate(Employees._id,{$set:{ename:emp.ename,esal:emp.esal}});
          return resp.status(230).json({"Msg":"Employee updated successfully"})
    }
    catch(err){

      return resp.status(450).json({"Err":err.message})  

    }
})

router.delete('/delete/:id',async (req,resp)=>{
    try{
        let emp_id=req.params.id
        let Employee= await EmployeeModel.findOne({eid:emp_id})

        if(!Employee){
            return resp.status(400).json({"Err":"Employee not exist"})
        }
    await EmployeeModel.findByIdAndDelete(Employee._id)
    return resp.status(401).json({"Msg":"Employee deleted successfully"})
    }
   catch(err){
         return resp.status(4500).json({"Err":err.message})
   }

})
export default router;

