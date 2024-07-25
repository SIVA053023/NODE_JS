import mongoose from 'mongoose'

let emp_schema=mongoose.Schema({
   eid:Number,
   ename:String,
   esal:Number
})
let Employees=mongoose.model("Siva",emp_schema)
export default Employees