import express from 'express'

let router = express.Router()

/*
API URL:http://127.0.0.1:8080/products/
Method:GET
*/
router.get("/",(req,resp)=>{
    resp.send({"msg":"Product Root Request......"})
})
/*
    URL: http://127.0.0.1:8080/products/all
    Method:POST
  
*/
router.get("/all",(req,resp)=>{

})
/*
    URL: http://127.0.0.1:8080/products/
    Method:POST
    Required Fields: name,price,qty,info,image
*/
router.post("/",(req,resp)=>{})
/*
    URL:http://127.0.0.1:8080/products/432442344
    Method:GET
    Required Fields: name,price,qty,info,image
*/
router.get("/:id",(req,resp)=>{})
/*
    URL:http://127.0.0.1:8080/products/432442344
    Method:PUT
    Required Fields: name,price,qty,info,image
*/
router.put("/:id",(req,resp)=>{})
/*
    URL:http://127.0.0.1:8080/products/432442344
    Method:DELETE
    Required Fields: name,price,qty,info,image
*/
router.delete("/:id",(req,resp)=>{

})

export default router