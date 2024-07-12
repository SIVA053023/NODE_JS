import bcrypt from 'bcrypt';
let user={
    name:"rahul",
    id:"101",
    password:"rahul@123"
}

let one=bcrypt.genSaltSync(7);
// let new_password=bcrypt.hashSync(user.password,one)
let new_password=bcrypt.hashSync(user.password,one)
console.log(new_password)
user={...user,password:new_password}
console.log(user)
let flag=bcrypt.compareSync("rahul@123",new_password)
if(flag){
    console.log("login successfully")
}
else{
    console.log("login failed")
}