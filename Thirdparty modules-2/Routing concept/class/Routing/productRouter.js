import express from 'express'

let router = express.Router();
router.put('/update',(req,resp)=>{
    resp.send("Router 'PUT' is running successfully")
})
router.delete('post',(req,resp)=>{
    if(err) throw err
    resp.send("Router 'delete' is running successfully")
})
export default router