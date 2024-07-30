import express from 'express'
import mobile from '../model/mobile.js'

let router=express.Router()

// READ
router.get('/read',async(req,resp)=>{
    try{
        let mobiles= await mobile.find();
        return resp.status(300).json(mobiles)
    }
    catch(err){
             console.log(err.message)
    }
    
})

// CREATE

router.post('/create',async(req,resp)=>{
    try{
        let m_body=req.body
        let mobiles=await mobile.findById({Brand:m_body.Brand})
        if(mobiles){
            return resp.status(200).json({"msg":"this mobile Brand already exist"})
        }
        mobiles=await new mobile(m_body)
        mobiles.save()
        return resp.status(400).json({"msg":"created successfully"})
    }
    catch(err){
        console.log(err.message)
    }
})

// UPDATE
router.put('/update/:id',async(req,resp)=>{
    try{
        let m_body=req.body
        let Id=req.params.id
        let mobiles=await mobile.findById(Id)
        if(!mobiles){
            return resp.status(600).json({"msg":"mobile not exists"})
        }
        await mobile.findByIdAndUpdate(Id,{$set:m_body},{new:true})
        return resp.status(200).json({"msg":"mobile updated successfully"})

    }
    catch(err){
        return resp.status(100).json({"msg":err.message})

    }
})

// DELETE
router.delete('/delete/:id',async(req,resp)=>{
    try{
         let Id=req.params.id
         let mobiles=await mobile.findById(Id)
         if(!mobiles){
            return resp.status(500).json({"msg":"mobile not existed"})
         }
         await mobile.findbyIdAndDelete(Id)
         return resp.status(520).json({"msg":"deleted successfully"})
    }
    catch(err){
           return resp.status(300).json(err.message)
    }
})

export default router