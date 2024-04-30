import express from 'express'
import fs from 'fs'
let router = express.Router()

/*
  URL: http:127.0.0.1:8080/api/
  Method:GET
*/
router.get("/",(req,resp)=>{
    resp.send("Api Root Request")
})

/*
  Use Case: all read all emplyees
  URL: http://127.0.0.1:8080/api/read
  Method:GET
*/
router.get("/read",(req,resp)=>{
        console.log("Inside - read API")
        
        let employees = getEmployees()
        console.log(employees)
        //resp.send(employees)
        //resp.send({"msg":"Getting All Employees", "employees":employees});
        resp.status(200).json(employees)
})

/*
  URL: http://127.0.0.1:8080/api/create
  Method:POST
*/
router.post("/create",(req,resp)=>{
        console.log("Inside Create Employee - API Req")
        let emp = req.body
        console.log(emp)
        let employees=getEmployees()
        let flag=employees.find((employee)=>{
            return employee.id == emp.id
        })
        if(flag){
            return resp.send({"msg":"Employee Alread Exist"})
        }
        employees.push(emp)
        saveEmployees(employees)
        return resp.send({"mgs":"Employee created Successfully"})
})

/*
 usage - update 
 url : http://127.0.0.1:8080/api/update/101
 method:put
 required: id,ename,eloc,esal
*/
router.put("/update/:id",(req,resp)=>{
  let eid=req.params.id
  console.log(eid)
  //verify employee existing or not ?
  let employees = getEmployees()
  let flag=employees.find((emp)=>{
                  return emp.id == eid 
                })
  console.log(flag)
  if(!flag){
    return resp.send({"msg":"Employee Not Exists"})
  }
  let remaining_emps=employees.filter((emp)=>{
    return emp.id != eid
  })
  console.log(remaining_emps)
  remaining_emps.unshift(req.body)
  console.log(remaining_emps)
  saveEmployees(remaining_emps)
  return resp.send({"msg":"Employee object updated"})
})

/*
  usage :delete employee 
  url: http://127.0.0.1:8080/api/delete/102
  method:delete

*/
router.delete("/delete/:id",(req,resp)=>{
  let eid = req.params.id
  //verify employee existing or not ?
  let employees = getEmployees()
  let flag=employees.find((emp)=>{
                  return emp.id == eid 
                })
  //console.log(flag)
  if(!flag){
    return resp.send({"msg":"Employee Not Exists"})
  }
  let remaining_Employees=employees.filter((emp)=>{
    return emp.id !=eid;
  })
  console.log(remaining_Employees)
  saveEmployees(remaining_Employees)
  return resp.send({"msg":"Employee Object delete sucessfully"})
})

function getEmployees(){
    console.log("Inside getEmployees Function")
    var employees;
    let data = fs.readFileSync('emp.json','utf-8')
    return JSON.parse(data)

   /*  fs.readFile('emp.json','utf-8',(err,data)=>{
        if(err) throw err 

        employees = JSON.parse(data)
        
    })
    return employees */
}

function saveEmployees(employees){
    fs.writeFileSync('emp.json',JSON.stringify(employees))
}

export default router