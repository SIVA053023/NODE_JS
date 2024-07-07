
const fs =require ('fs');
let demo=fs.readFileSync('data.txt','utf-8');
//console.log(demo)
fs.writeFileSync('siva.txt',demo)