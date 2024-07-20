import mongoose from 'mongoose'

let emp_schema=mongoose.Schema({
    eid:Number,
    ename:Number,
    esal:Number

})
let employees=mongoose.model("employees",emp_schema)
export default employees