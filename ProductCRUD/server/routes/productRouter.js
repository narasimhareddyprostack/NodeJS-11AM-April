import express from 'express'
import Product from '../model/Product.js'
let router = express.Router()


/*
    URL: http://127.0.0.1:8080/products/create
    Method Type:POST
    Required Fields: name,price,qty,info,image
*/
router.post("/create", async(req,resp)=>{
    let newProduct={
        name:req.body.name,
        price:req.body.price,
        qty:req.body.qty,
        info:req.body.info,
        image:req.body.image
    }
    
    console.log(newProduct)
    //product is Exists or not ?
    let product=await Product.findOne({name:newProduct.name})
    if(product){
        return resp.status(401).json({msg:"Product Already exists"})
    }
    product=new Product(newProduct);
    //console.log(product)
    await product.save();
    resp.status(200).json({mgs:"Product created successfully",product:product})
})

/*
URL: http://127.0.0.1:8080/products/read
Method:GET
Required Fields:No

*/
router.get("/read/",async(req,resp)=>{
    let products=await Product.find();
    resp.status(200).json(products)
})

/*
    URL:http:127.0.0.1:8080/products/663a163727afa4f6fa54e81a
    Method:GET
*/
router.get("/:id",async(req,resp)=>{
    let productId=req.params.id;

    let product= await Product.findById(productId);
    resp.status(200).json(product)
})

/*
    URL: http://127.0.0.1:8080/products/update/663a163727afa4f6fa54e81a
    Method :PUT
    required Field:name,price,info,image,qty
*/

router.put("/update/:id",async(req,resp)=>{
    console.log("Inside update req")

    let productId=req.params.id;
    console.log(productId)
    
    //Verify the product exits or not 
    let product=await Product.findById(productId)
    console.log(product)
    if(!product){
        return resp.status(401).json({msg:"Product Not Exits"})
    }
    let updatedProduct={
        name:req.body.name,
        price:req.body.price,
        info:req.body.info,
        qty:req.body.qty,
        image:req.body.image
    }
    console.log(updatedProduct)
    //update the product
    product=await Product.findByIdAndUpdate(productId,{$set:updatedProduct},{new:true})
    console.log(product)
    resp.status(200).json({msg:"Product Updated",product:product})

})

/*
    url:http://127.0.0.1:8080/products/663a163727afa4f6fa54e81f
    url:http://127.0.0.1:8080/products/delete/663a163727afa4f6fa54e81f
    Method:Delete
    required Fields:None
*/
router.delete("/delete/:id", async(req,resp)=>{
    let productId=req.params.id
    //verify product exits or not 
    let product=await Product.findById(productId)
    if(!product){
        return resp.status(401).json({msg:"Product Not Exits"})
    }
    product=await Product.findByIdAndDelete(productId)
    resp.status(200).json({msg:"Product Deleted Successfully"})
})
export default router