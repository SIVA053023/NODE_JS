import express, { json } from 'express';
import fs from 'fs';

let router= express.Router()
router.get('/read',async(req,resp)=>{
let employees=await get_employees()
resp.send(employees)
})

let saveEmployees=(employees)=>{}
let get_employees=()=>{
    let employees=fs.readFileSync('user.json','utf-8')
    return JSON.parse(employees)
}
export default router