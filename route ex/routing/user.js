import express from 'express'
let router=express.Router();

router.get('/read',(req,resp)=>{
    resp.send("now we are using the user-GET")
})
router.post('/create',(req,resp)=>{
    resp.send("now we are requesting the user-POST")
})

export default router