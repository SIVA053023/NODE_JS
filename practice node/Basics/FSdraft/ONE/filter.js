const fs=require ('fs');
fs.readFile('users.json','utf-8',(err,data)=>{
    if (err) throw err;
    let users=JSON.parse(data);
    let female_users=[]
    let male_users=[]
    for(user of users){
        if(user.gender==="Male"){
            male_users.push(user);
        }
        else{
            female_users.push(user);
        }
    }
    fs.writeFile('female.json',JSON.stringify(female_users),err=>{
        if(err) throw err;
        console.log("female_users data successfully written")
    })
    fs.writeFile('male.txt',JSON.stringify(male_users),(err)=>{
        if(err) throw err;
        console.log("successfully male_users written")
    })
})