import mongoose from 'mongoose'

let product_schema=mongoose.Schema({
    eid:Number,
    ename:String,
    esal:Number,
    eloc:String
})

let employee=mongoose.model("product_task",product_schema)

export default employee