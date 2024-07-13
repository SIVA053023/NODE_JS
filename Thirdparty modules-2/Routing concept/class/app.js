import express from 'express';
import morgan from 'morgan';
import userRouter from './Routing/userRouter.js';
import prodrouter from './Routing/productRouter.js';
let app = express();

app.use("/user",userRouter)
app.use("/product",)

app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server running http://localhost:8080/`)
})