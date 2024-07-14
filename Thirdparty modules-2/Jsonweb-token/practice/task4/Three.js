import express from 'express';
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import morgan from 'morgan';
import chalk from 'chalk';

let app= express();
app.use(morgan('dev'))

dotenv.config({path:'./Config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME
// here are using the express
app.get('/',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','index.html'),(err)=>{
        if (err) throw err   
    })
})
app.get('/index',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','index.html'),(err)=>{
        if (err) throw err   
    })
})
app.get('/about',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','about.html'),(err)=>{
        if (err) throw err   
    })
})
app.get('/contact',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','contact.html'),(err)=>{
        if (err) throw err   
    })
})
app.get('/services',(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),'html','services.html'),(err)=>{
        if (err) throw err   
    })
})
app.listen(port,hostname,(err)=>{
    if(err) throw err
    console.log(chalk.bgYellow(`server running http://${hostname}:${port}/`))
})
// using the bcrypt

let user={
    name:'siva',
    id:'102',
    sal:'45632'
}
let one=bcrypt.genSaltSync(8);
let new_id=bcrypt.hashSync(user.id,one);
console.log(new_id);
let flag=bcrypt.compareSync('102',new_id)
if(flag){
    console.log("login successfully")
}
else{
    console.log("login failed")
} 
// now we are using the jwt
let key=process.env.key
let sig=jwt.sign(user,key)
console.log(sig)
let vr=jwt.verify(sig,key)
console.log(vr)

