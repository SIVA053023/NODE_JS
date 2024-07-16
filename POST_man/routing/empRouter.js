import express from 'express'; // here we are going to CREATE the 'emp' by POST method
import fs from 'fs'
import path from 'path';

let router = express.Router();
router.post('/create',(req,resp)=>{
      fs.readFile(path.join(process.cwd(),'data.json'),'utf-8',(err,data)=>{
        if (err) throw err
        console.log(data)
      })
})

export default router
