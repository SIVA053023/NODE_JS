import fs from 'fs';
import path from 'path';
fs.readFile(path.join(process.cwd(),"one","two","data.txt"),'utf-8',(err,data)=>{           ///es-6
    if(err) throw err
    console.log(data)
})