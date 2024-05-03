import express from 'express'
import Employee from '../model/employee.js'
let router = express.Router()

/*
  usage: update employee data
  URL: http://127.0.0.1:8080/api/update/103
  Method:PUT
  Required Fields: name,email,salary
  Access Type: Public
*/
router.put("/update/", async (req,resp)=>{
let {id,name,email,salary} = req.body 
const filter    = {name:name}
const update  = {name:"Rahul Gandhi", email:email, salary:salary}

let result = await Employee.findOneAndUpdate(filter,update,{new: true,upsert: true,rawResult: true})

resp.send({"msg":result})
})

router.get("/read",async (req,resp)=>{
  let employees = await Employee.find()
  resp.status(200).json(employees)
 })


export default router