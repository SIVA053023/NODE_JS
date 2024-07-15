import bcrypt from 'bcrypt';
let user={
    name:"rahul",
    eid:"102",
    cc:"1234567895641891",
    password:"abc",
}
let one=bcrypt.genSaltSync(10)
let new_cc= bcrypt.hashSync(user.cc,one)
console.log(new_cc)
user={...user,cc:new_cc}
console.log(user)
let flag=bcrypt.compareSync("1234567895641891",user.cc)
if(flag){
    console.log("login successfully")
}
else{
    console.log("Login failed")
}