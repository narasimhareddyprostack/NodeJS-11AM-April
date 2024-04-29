import express from 'express'
import apiRouter from './routes/appRouter.js'
const app = express()


//to read client form data/post man tool data 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/*
  URL: http:127.0.0.1:8080/
  Method:GET
*/
app.get("/",(req,resp)=>{
    resp.send("Welcome to Node JS! Root Request")
})

app.use("/api",apiRouter)

app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Runninig http://127.0.0.1:8080`)
})