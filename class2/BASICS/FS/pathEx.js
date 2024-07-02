const fs = require('fs');
const path = require('path');
let data=fs.readFileSync(path.join(__dirname,"BASICS","FS","data.txt"),'utf-8')

console.log(data)

/*const fs= require ('fs')
let data=fs.readFileSync(D:/NODE_ JS/class2/BASICS/FS/data.txt) // hard code but it is not a good practice
console.log(data)*/