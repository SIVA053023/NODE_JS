const fs= require ('fs')
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) throw err;
    let users=JSON.parse(data);
    let siva=[];
    let krishna=[];
    for(user of users){
        if(user.gender==="Male"){
            siva.push(user)
        }
        else{
            krishna.push(user)
        }

    }
    fs.writeFile('siva.json',JSON.stringify(siva),(err)=>{
        console.log("siva successfully sorted")
    })
    fs.writeFile('krishna.json',JSON.stringify(krishna),(err)=>{
        console.log("krishna successfully sorted")

    })

    
})