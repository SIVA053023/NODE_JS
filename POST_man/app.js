import express from 'express';
import empRouter from './routing/empRouter.js'

let app= express();

// how to read form data
app.use(express.json())
app.use('/read',empRouter)

app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server runnning http://localhost:8080/`)
})
