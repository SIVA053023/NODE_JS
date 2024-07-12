// import express from 'express';
// import dotenv from 'dotenv';
import bcrypt from 'bcrypt'
import path from 'path';
let customer={name:"siva", id:"101",P:"1234"}
//               {name:"rahul", id:"102",P:"1235"},
//               {name:"Dravid", id:"101",P:"1236"}
// ]
let one=bcrypt.genSaltSync(8);
let new_name=bcrypt.hashSync(customer.name, one)
console.log(new_name)

