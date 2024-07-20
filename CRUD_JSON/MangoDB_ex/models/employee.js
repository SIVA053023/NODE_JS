import mongoose from 'mongoose';

let emp_schema=mongoose.Schema({
    eid:Number,
    ename:String,
    esal:Number
})
let Employees=mongoose.model("employees",emp_schema)

export default Employees;