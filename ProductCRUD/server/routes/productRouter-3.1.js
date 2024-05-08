import express from 'express'
import Product from '../model/Product.js'
let router = express.Router()

/*
URL: http://127.0.0.1:8080/products/all
Method:GET
Required Fields:No

*/
router.get("/all",async(req,resp)=>{
    let products=await Product.find();
    resp.status(200).json(products)
})


/*
    URL: http://127.0.0.1:8080/products/create
    Method Type:POST
    Required Fields: name,price,qty,info,image
*/
router.post("/create", async(req,resp)=>{
    /* let newProduct={
        name:req.body.name,
        price:req.body.price,
        qty:req.body.qty,
        info:req.body.info,
        image:req.body.image
    } */
    let {name,price,qty,info,image}=req.body
    
    //console.log(newProduct)
    //product is Exists or not ?
    let product=await Product.findOne({name:name})
    console.log(product)
    if(product){
        return resp.status(401).json({msg:"Product Already exists"})
    }
    product=new Product({name,price,qty,info,image});
    //console.log(product)
    await product.save();
    resp.status(200).json({mgs:"Product created successfully",product:product})

})

export default router