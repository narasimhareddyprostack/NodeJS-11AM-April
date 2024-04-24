import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'

import path from 'path'

import dotenv from 'dotenv'
//create express app 
let app = express()

//load env variable
dotenv.config({'path':'./config/dev.env'})
let port = process.env.PORT 
let host= process.env.HOST_NAME

//http logger ie morngan
app.use(morgan('tiny'))

//application root req
app.get("/",(req,resp)=>{
    resp.send("Welcome to Express app")
})

app.get("/about",(req,resp)=>{
    resp.send("about Page")
})

app.get("/services",(req,resp)=>{
    resp.send("Services Page")
})

app.get("/contact",(req,resp)=>{
    resp.send("contact Page")
})

//provide port,host
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(chalk.red(`Server Running... http://${host}:${port}`))
})