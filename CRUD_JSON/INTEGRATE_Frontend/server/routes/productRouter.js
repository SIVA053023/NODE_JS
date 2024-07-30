import express from "express";
import Product from '../models/Product.js'
let router= express.Router();

/*
    url:http://127.0.0.1:8080/product/
*/
router.get("/",(req,resp)=>{
    resp.json({"msg":"Product Root Request"})
});
/*
    USAGE: get all products
    URL: http://127.0.0.1:8080/product/read
    MEthod:GET
    Fields:none
    Access Type:Public
*/
 router.get("/read",async(req,resp)=>{
    try{
       let products  = await Product.find()
       return resp.status(200).json(products)
    }
    catch(err){
        return resp.status(401).json({"msg":err.message})
    }
 });
/*
    USAGE: Get Single Products
    URL: http://127.0.0.1:8080/product/122333
    MEthod:GET
    Fields:none
    Access Type:Public
*/
router.get("/:id",async(req,resp)=>{
    try{
        let pId=req.params.id;
        let product=await Product.findById(pId)
        if(!product){
            return resp.status(401).json({"msg":"Product Not Exits"})
        }
        return resp.status(200).json(product)
    }
    catch(err){

    }
})

/*
 Usage: Create new Product
 URL  : http://127.0.0.1:8080/product/create
 Method:POST
 Req Fields: name,image,price,qty,info
*/
router.post("/create",async(req,resp)=>{
    try{
        let prodData=req.body
       
        let product=await Product.findOne({name:prodData.name})
       
       
        if(product){
            return resp.status(401).json({"msg":"Produt Already Exits"})
        }
        product=new Product(prodData)
        console.log(product)
        await product.save();
        resp.status(201).json({"msg":"product created sucessfully"})
    }
    catch(err){
        return resp.status(401).json({"msg":err.message})
    }
});

/*
    Usage: Update Product
    URL:http://127.0.0.1:8080/product/update/432342
    Method:PUT
    Required: name,image,price,qty,info
*/
router.put("/update/:id",async(req,resp)=>{
        try{    
            let pId=req.params.id;
            let prodData=req.body;
            let product=await Product.findById(pId)
            if(!product){
                return resp.status(401).json({'msg':"Product Not Exitss"})
            }
           /*  await Product.findByIdAndUpdate(pId, 
                       {$set:{
                             name:prodData.name, 
                             image:prodData.image,
                             price:prodData.price,
                             qty:prodData.qty,
                             info:prodData.info
                        }
            }) */
           await Product.findByIdAndUpdate(pId,{$set:prodData},{new:true})
            return resp.status(200).json({'msg':"Updated Successfully!"})

        }
        catch(err){
            return resp.status(401).json({'err':err.message})
        }
})
/*
 Usage: Delete a Product Product
 URL  : http://127.0.0.1:8080/product/delete/:id
 Method:DELETE
 Req Fields: None
*/
router.delete("/delete/:id", async(req,resp)=>{
    try{    
        let pId=req.params.id;
        let product=await Product.findById(pId)
        if(!product){
            return resp.status(401).json({"msg":"Product Not Exists"})
        }
        await Product.findByIdAndDelete(pId)
        return resp.status(200).json({"msg":"Product Deleted Successfully"})
    }
    catch(err){
        return resp.status(401).json({'err':err.message})
    }
});

export default router;


