import express from 'express'
import Product from '../models/Product.js'

let router=express.Router()


router.get('/',(req,resp)=>{
   resp.send("product root_request")
})

router.get('/read',async(req,resp)=>{
   try{
    let Products=await Product.find();
    return resp.json(Products)
   } 
   catch(err){
          return resp.status(200).json({"msg":err.mesaage})
   }
})
router.post('/create',async(req,resp)=>{
   try{
       let emp_body=req.body
       let products=await Product.findOne({name:emp_body.name})
       if(products){
         return resp.status(200).json({"msg":"product already exist"})
       }
      //  await products.push(emp_body)
      products=await new Product(emp_body)
       products.save();

       return resp.status(300).json({"msg":"Product created successfully"})
   }
   catch(err){
          console.log(err.mesaage)
          process.exit(1)
   }
})

router.put('/update/:id',async(req,resp)=>{
   try{
      let emp_body=req.body;
      let P_id=req.params.id
      let employee=await Product.findById(P_id)
      if(!employee){
         return resp.status(200).json({"err":"Employeee doesn't exist"})
      }
      await Product.findByIdAndUpdate(P_id,{
         $set:emp_body},{new:true})
      return resp.status(450).json({"msg":"Product updated successfully"})
   }
   catch(err){
           return resp.send(err.message)
           
   }
})

// router.put('/update/:id', async (req, res) => {
//    try {
       
//        let P_id = req.params.id;
//        let product = await Product.findById(P_id);
       
//        if (!product) {
//            return res.status(400).json({ "msg": "Product not found" });
//        }

//        let P_Data = req.body;
//        await Product.findByIdAndUpdate(P_id, {
//            $set: {
//                name: P_Data.name,
//                image: P_Data.image,
//                price: P_Data.price,
//                qty: P_Data.qty,
//                info: P_Data.info
//            }
//        });

//        return res.status(200).json({ "msg": "Product updated successfully" });
//    } catch (error) {
//        return res.status(500).json({ "msg": "Error occurred while updating product items", "error": error.message });
//    }
// });


router.delete('/delete/:id', async(req,resp)=>{
      try{
         let pId=req.params.id
         let product=await Product.findById(pId)
        
         if(!product){
            return resp.status(401).json({"err":"Product not existed"})
         }
         // await Product.findByIdAndDelete({products._id})
         await Product.findByIdAndDelete(pId)
         return resp.status(200).json({"msg":"Product deleted successfully"})

      }    
      catch(err){
         return resp.json({"err":err.message})
      
      }
});
// router.delete("/delete/:id", async(req,resp)=>{
//    try{    
//        let pId=req.params.id;
//        let product=await Product.findById(pId)
//        if(!product){
//            return resp.status(401).json({"msg":"Product Not Exists"})
//        }
//        await Product.findByIdAndDelete(pId)
//        return resp.status(200).json({"msg":"Product Deleted Successfully"})
//    }
//    catch(err){
//        return resp.status(401).json({'err':err.message})
//    }
// });

// get the single product

// router.get('/:id',async(req,resp)=>{
//    try{
//         let pid=req.params.id
//         let products=await Product.findById({pid})
//         if(!products){
//          return resp.status(300).json({"err":"Product not exist"})

//         }
//         return resp.status(123).json(products)
//    }
//    catch(err){

//    }
// })


export default router