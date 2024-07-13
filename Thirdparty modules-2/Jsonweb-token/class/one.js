import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

let payload={
    uname:"Rahul",
    cid:'Rahul19',
    password:"ILinida"
}

dotenv.config({path:'./dev.env'})

let s_Key=process.env.SECRET_KEY
let token=jwt.sign(payload,s_Key)
console.log(token)

let user = jwt.verify(token,s_Key)
console.log(user)