import express from 'express'
let router=express.Router();

router.put('/update',(req,resp)=>{
    resp.send("now we are using the user-PUT")
})
router.delete('/delete',(req,resp)=>{
    resp.send("now we are requesting the user-DELETE")
})
export default router