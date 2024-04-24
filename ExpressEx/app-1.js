import express from 'express'
import path from 'path'
const app = express()

/*
    API URL: http://127.0.0.1:8080/
    Method:GET
    Access Type:Public 
    Required Fields:None
*/
app.get("/",(req,resp)=>{
    resp.send("Welcome to Express JS")
})
/*
    API URL: http://127.0.0.1:8080/about
    Method:GET
    Access Type:Public 
    Required Fields:None
*/

app.get("/about",(req,resp)=>{
    resp.json({"msg":"Success"})
})
app.get("/contact",(req,resp)=>{
    let file_Name=path.join(process.cwd(),"index.html")
    resp.sendFile(file_Name)
})
app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Running...http://127.0.0.1:8080`)
})