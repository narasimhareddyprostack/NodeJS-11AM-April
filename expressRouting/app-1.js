import express from 'express'
import dotenv from 'dotenv'
const app = express()



dotenv.config({'path':'./config/dev.env'})
let port = process.env.PORT 
let host = process.env.HOST

app.get("/",(req,resp)=>{
    resp.send("Root Request")
})
app.post("/user/add",(req,resp)=>{
    resp.send("New User -Adding")
})
app.post("/product/add",(req,resp)=>{
    resp.send("New Product -Adding")
})
app.post("/order/add",(req,resp)=>{
    resp.send("New Order -Adding")
})

app.listen(port,host,(err)=>{
    if(err)throw err 
    console.log(`Servre is Running.. http://${host}:${port}`)
})