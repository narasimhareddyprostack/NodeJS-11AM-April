import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'

import productRouter from './routes/productRouter.js'
let app = express()

//To receive form data - configure express json /body-parser
app.use(express.json())
//app.use(express.urlencoded({extended:false}))

//enable clent entry points/middleware
app.use(morgan('tiny'))

dotenv.config({'path':'./config/config.env'})

let port = process.env.PORT 
let host =process.env.HOST_NAME
let mongo_Local_url=process.env.MONGO_DB_LOCAL_URL

app.get("/",(req,resp)=>{
    resp.send("Root Request")
})

app.use("/products/",productRouter)


mongoose.connect(mongo_Local_url)
.then((response)=>{
    console.log("MongoDB collection Successfull")
})
.catch((err)=>{
    console.log(err)
    process.exit(1);
})


app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server is Running .. http://${host}:${port}`)
})