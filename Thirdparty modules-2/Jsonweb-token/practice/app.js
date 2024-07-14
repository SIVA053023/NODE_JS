import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
let user={
    name:"Siva",
    eid:"101",
    esal:"45000",
    
}
dotenv.config({path:"./Config/dev.env"});
let key=process.env.key;
let sig= jwt.sign(user,key)
console.log(sig);
let vr=jwt.verify(sig,key);
console.log(vr)

let us={...user,eid:102}
console.log(us)