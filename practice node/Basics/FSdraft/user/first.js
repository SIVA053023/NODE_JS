const fs=require ('fs')

fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) throw err;
    let users=JSON.parse(data);
    let female_users=[];
    let male_users=[];
    let trans=[];
    for ( user of users){
        if(user.gender==="Male"){
            male_users.push(user);
        }
        else if(user.gender==="Female"){
female_users.push(user);
        }
        else{
            trans.push(user)
        }
    }

    fs.writeFile('f.json',JSON.stringify(female_users),(err)=>{
        if(err) throw err;
        console.log("successfully written")
    })
    fs.writeFile('male.txt',JSON.stringify(male_users),(err)=>{
        if(err) throw err;
        console.log(" successfully written female_users")
    })
    fs.writeFile('tran.txt',JSON.stringify(trans),(err)=>{
        if(err) throw err;
        console.log("ok")
    })
})