import express from 'express'
let router=express.Router()
//business login
/*
    API URL:http://127.0.0.1:8080/user/all
    Method: GET
    Access Type:Public
*/
router.get("/all",(req,resp)=>{
    resp.send("User - all")
})

/*
    API URL:http://127.0.0.1:8080/user/add
    Method: POST
    Access Type:Public
*/
router.post("/add",(req,resp)=>{
    resp.send("User - New User")
})
/*
    API URL:http://127.0.0.1:8080/user/update
    Method: PUT
    Access Type:Public
*/
router.put("/update",(req,resp)=>{
    resp.send("User - Update User")
})
/*
    API URL:http://127.0.0.1:8080/user/delete
    Method: DELETE
    Access Type:Public
*/
router.delete("/delete",(req,resp)=>{
    resp.send("User - Delete User")
})

export default router