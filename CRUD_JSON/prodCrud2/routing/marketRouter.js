import express from 'express'
import product from '../model/market.js'

let router=express.Router()

router.get('/',(req,resp)=>{
    return resp.status(400).json({"msg":"welcome to the market"})
})

router.get('/read',async(req,resp)=>{
    try{
         let market=await product.find();
         return resp.status(200).json(market)
    }
    catch(err){
       return resp.status(500).json({"msg":"market not found"})
    }
})

router.post('/create',async(req,resp)=>{
    try{
          let mar_body=req.body

          let market=await product.findOne({name:mar_body.name})
          if(market){   
            return resp.status(100).json({"msg":"market already in list"})
          }
          market= new product(mar_body)
          await  market.save()
          return resp.status(500).json(market)
    }
    catch(err){
      console.log(err.message)
    }
})

// router.put('/update/:id',async(req,resp)=>{
//    try{ let mar_body=req.body
//     let mar_id=req.params.id
//     let market=await product.findById(mar_id)
//     if(!market){
//         return resp.status(200).json({"msg":"market doesn't exist"})
//     }

//      await product.findByIdAndUpdate(mar_id,{$set:mar_body},{new:true})
//      return resp.status(500).json({"msg":"market updated successfully"})
// }
// catch(err){
//   return resp.status(300).json({"msg":err.message})
// }
// }
// )
router.put('/update/:id',async(req,resp)=>{
    try{
       let emp_body=req.body;
       let P_id=req.params.id
       let employee=await product.findOne({name:P_id})
       if(!employee){
          return resp.status(200).json({"err":"Employeee doesn't exist"})
       }
       await product.findByIdAndUpdate(P_id,{
          $set:emp_body},{new:true})
       return resp.status(450).json({"msg":"Product updated successfully"})
    }
    catch(err){
            return resp.send(err.message)
            
    }
 })

router.delete('/delete/:id',async(req,resp)=>{
    try{
        let mar_id=req.params.i
        let market=await product.findById((mar_id))
        if(!market){
            return resp.status(600).json({"msg":"market doesn't exist"})
        }
        market=await findByIdAndDelete(mar_id._id)
        return resp.status(200).json({"msg":"market deleted successfully"})
    }
    catch(err){
        return resp.status(300).json({"msg":err.message})
      }
})

export default router 