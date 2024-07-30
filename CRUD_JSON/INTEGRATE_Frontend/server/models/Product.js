import mongoose from "mongoose";

let productSchema = mongoose.Schema({
    name:{type:String,require:true},
    image:{type:String,require:true},
    price:{type:Number,require:true},
    QTY:{type:Number,require:true},
    info:{type:String,require:true}
})
let Product = mongoose.model("integrate",productSchema)
export default Product;