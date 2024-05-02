import express from "express";
import mongoose from "mongoose";
import empRouter from './routes/empRouter.js'
const app = express()



//to read client form data/post man tool data 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.get("/",(req,resp)=>{
    resp.send("Root Request")
})

app.use("/api",empRouter);

mongoose.connect('mongodb://localhost:27017/11am')
.then(()=>{
    console.log("MongoDB connection Successfull")
})
.catch(
    console.log("Failed")
)

app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Running... http://`)
})