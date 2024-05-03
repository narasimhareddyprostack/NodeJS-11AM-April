import express from 'express'
import Employee from '../model/employee.js'
let router = express.Router()

router.get("/read", async(req,resp)=>{
  let employees = await Employee.find()
  resp.status(200).json(employees)
})
/*  
  URL:http://127.0.0.1:8080/api/create
  Method Type:POST
  required Field:id, name,email,salary
*/
router.post("/create",(req,resp)=>{
  let {id,name,email,salary} = req.body
  let employee=new Employee({id,name,email,salary})
  console.log(employee)
  employee.save()
  resp.send({"msg":"New Employee Created","employee":employee})

})
router.put("/update/:id",async(req,resp)=>{
  let  eid=req.params.id 
  console.log(eid)
  let  {id,name,email,salary} = req.body
  console.log(name)
  let filter = {id:eid}
  let result = await Employee.findOneAndUpdate(filter,{id,name,email,salary},{ new: true })
  console.log(typeof result)
  resp.status(200).json(result)
})

router.delete("/delete/:id", async (req,resp)=>{
  let id=req.params.id;
  console.log(id)
  let employee=await Employee.findById(id)
  if (!employee) {
    return resp.status(401).json({
        msg: 'No employee Found'
    });
    employee = await Employee.findByIdAndDelete(id);
    resp.status(200).json({
        result: 'employee is Deleted',
        employee: employee
    });
}

  
})


export default router