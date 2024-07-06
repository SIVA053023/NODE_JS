const fs=require ('fs');
//const{json}=require('stream/consumers')
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) throw err;
    //console.log(data)
    let users=JSON.parse(data)
    for(let user of users){
        console.log(user.name)
    }
})