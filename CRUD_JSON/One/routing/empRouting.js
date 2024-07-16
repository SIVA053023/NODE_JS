import express from 'express'
import fs from 'fs'
import path from 'path';
let router= express.Router();

router.put('/update',(req,resp)=>{})

router.get('/read',async(req,resp)=>{
    let employees= await get_employees()
    resp.status(200).json(employees)

})

let savemployees=(employees)=>{}
let get_employees=()=>{
   let employees= fs.readFileSync('data.json','utf-8')
   return JSON.parse(employees)
}
export default router