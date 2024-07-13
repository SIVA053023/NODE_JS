import express from 'express';
let router=express.Router();


router.get("/get",(req,resp)=>{
    resp.send("user Router -GET Request")
})

router.post("/add",(req,resp)=>{
    resp.send("user router, post method")
})
export default router