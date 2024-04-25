import express from 'express'
let productRouter=express.Router()


//business login
/*
URL: http://127.0.0.1:8080/product/all
Method:GET
Access Type:Public
*/
productRouter.get("/all",(req,resp)=>{
    resp.send("Product - All")
})
/*
URL: http://127.0.0.1:8080/product/add
Method:POST
Access Type:Public
*/
productRouter.post("/add",(req,resp)=>{
    resp.send("Product - Add")
})

/*
URL: http://127.0.0.1:8080/product/update
Method:PUT
Access Type:Public
*/
productRouter.put("/update",(req,resp)=>{
    resp.send("Product - Update")
})
/*
URL: http://127.0.0.1:8080/product/delete
Method:DELETE
Access Type:Public
*/
productRouter.delete("/delete",(req,resp)=>{
    resp.send("Product - delete")
})


export {productRouter}