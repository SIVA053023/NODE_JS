import bcrypt from 'bcrypt';
let emp={
    ename:"Sivakrishna",
    eid:"405",
    esal:"56896",
    elogid:"2358",
    epassword:"Siva45@",
}

let salt=bcrypt.genSaltSync(10);
let new_logid=bcrypt.hashSync(emp.elogid,salt)
console.log(emp.elogid)
console.log(new_logid);
// user={...user,cc:new_cc,password:new_password}
//emp=(...emp,elogid:new_logid)
// console.log(emp);
emp={...emp,elogid:new_logid}
console.log(emp)
let flag=bcrypt.compareSync('2358',emp.elogid)
if(flag){
    console.log("Login success")
}
else{
    console.log("Login failed")
}