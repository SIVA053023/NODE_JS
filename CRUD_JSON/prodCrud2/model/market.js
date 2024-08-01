import mongoose from 'mongoose'

let market_schema=mongoose.Schema({
    _id: { type: String },
    name:String,
    typeOfmaket:String,
    location:String,
    turnover:Number,
    
})
let market=mongoose.model("market1",market_schema)

export default market