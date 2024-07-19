import mongoose from "mongoose";

let emp_Schema= new mongoose.Schema({
    eid:{type:Number,require:true},
    ename:String,
    esal:Number
})
let Employee=mongoose.model("employees",emp_Schema)
export default Employee