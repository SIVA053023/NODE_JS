import { json } from 'body-parser';
import express from 'express';
import fs from 'fs'
let router=express.Router();

router.get('/read',async(req,resp)=>{
    let employees= await get_employees();
    resp.status(200).json(employees)
   
})
router.post('/create',(req,resp)=>{})
router.put('/update',(req,resp)=>{})
router.delete('/delete',(req,resp)=>{})

let get_employees=()=>{
    let employees=fs.readdirSync('data.json','utf-8')
    return JSON.parse(data.json)
}
export default router