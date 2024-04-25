import express from 'express'
import dotenv from 'dotenv'

import userRouter from './routes/userRouter.js'
import {productRouter} from './routes/productRouter.js'
import orderRouter from './routes/orderRouter.js'
const app = express()


dotenv.config({'path':'./config/dev.env'})
let port = process.env.PORT 
let host = process.env.HOST

app.get("/",(req,resp)=>{
    resp.send("Root Request")
})
app.use("/user/",userRouter);
app.use("/product/",productRouter);
app.use("/order/",orderRouter);

app.listen(port,host,(err)=>{
    if(err)throw err 
    console.log(`Servre is Running.. http://${host}:${port}`)
})