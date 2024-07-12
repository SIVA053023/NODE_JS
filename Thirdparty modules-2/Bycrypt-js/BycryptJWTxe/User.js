import bcrypt from 'bcrypt';
let user={
    email:'Siva03023@gmail.com',
    cc:'4562 2563 1349 7894',
    cvv:'125',
    password:'I love Mangos',
}

let salt= bcrypt.genSaltSync(10);
let new_cc=bcrypt.hashSync(user.cc,salt);
let new_password=bcrypt.hashSync(user.password,salt)
console.log(user.cc);
console.log(new_cc);
user={...user,cc:new_cc,password:new_password}     /* ...user is a spread operator , spread operator helps extract and Copy
                              here we clearly changing the user cc to new_cc*/
console.log(user);
//let flag=bcrypt.compareSync('I love Grapes',user.password)
// if(flag){
//     console.log("login Success")
// }
// else{
//     console.log("Login failed")        // here output will be 'Lgin failed cause we gave password as "I love mangos"/ but here we are providing the "I love Grapes"
// }
let flag=bcrypt.compareSync('I love Mangos',user.password)

if(flag){
    console.log("login success")
}
else{
    console.log("Login failed")             // output must be login success cause we gave a correct password
}