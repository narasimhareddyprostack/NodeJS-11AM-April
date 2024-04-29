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
  URL: http:127.0.0.1:8080/api/read
  Method:GET
*/
router.get("/read",(req,resp)=>{
        console.log("Inside - read API")
        let employees = getEmployees()
        console.log(employees)
        resp.send(employees);
        //resp.status(200).json(employees)
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