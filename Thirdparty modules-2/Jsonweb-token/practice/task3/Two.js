import jwt from'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({path:'./Config/dev.env'})
let payload={
    name:"rahul",
    id:"108",
    sal:"78002",
    e_mail:"rahul203@gmail.com"
}
let key =process.env.KEY
let sign=jwt.sign(payload,key)
console.log(sign)
let verify=jwt.verify(sign,key)
console.log(verify);