import express from 'express'
import Employee from '../model/employee.js'
let router = express.Router()

router.get("/test",(req,resp)=>{
    resp.send({"message":"Emp Router Root Req"})
})

/*  
  URL:http://127.0.0.1:8080/api/create
  Method Type:POST
  required Field:id, name,email,salary
*/
router.post("/create",(req,resp)=>{
   /*  let name= req.body.name 
    let email=req.body.email
    let salary=req.body.salary */
    let {name,email,salary} = req.body
    let employee=new Employee({name,email,salary})
    console.log(employee)
    employee.save()
    resp.send({"msg":"New Employee Created","employee":employee})

    console.log(emp)

})
/* router.get()
router.put()
router.delete()
 */

router.get("/all",async (req,resp)=>{
 let employees = await Employee.find()
 resp.status(200).json(employees)
})
export default router