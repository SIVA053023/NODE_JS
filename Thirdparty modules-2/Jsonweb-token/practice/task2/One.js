import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({path:'./Config/dev.env'})
let payload={
    emp_name:"sivakrishna",
    id:"053",
    sal:"99560",
    email:"sivakrishna053@gmail.coom"

}
let key=process.env.Secret_key
let sign=jwt.sign(payload,key);
console.log(sign);

let verify=jwt.verify(sign,key)
console.log(verify)