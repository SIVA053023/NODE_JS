import mongoose from 'mongoose'

let mobile_Schema=mongoose.Schema({
    image:String,
    Brand:String,
    year_of_model:Number,
    MRP:Number,
    discount:Number,
    final_price:Number,
    feedback:String

})
let mobile=mongoose.model("mobile_info",mobile_Schema)

export default mobile