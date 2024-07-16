
import express from 'express'
import fs from 'fs'

let router= express.Router()

router.get('/read',async(req,resp)=>{
       let employee=await get_employees();
       resp.status(200).json(employee)

})

// let savemployees=(employees)=>{}
let get_employees=()=>{
    let employees= fs.readFileSync('data.json','utf-8')
    return JSON.parse(employees)
}
export default router

