import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Productadmin = () => {
 const [products,setProducts]=useState([])
 const [errormessage,setErrormessage]=useState('')
 useEffect(()=>{
  getProducts()
 },[])
 let getProducts=()=>{
  //let dataurl=`http://localhost:5000/task/products`
  let dataurl=`http://127.0.0.1:8080/products/read`
 axios.get(dataurl)
 .then((response)=>setProducts(response.data))
 .catch((err)=>setErrormessage(err))
 }

 let deleteProduct = (productId) => {
  let dataURL = `http://127.0.0.1:8080/products/delete/${productId}`;
  axios.delete(dataURL).then((response) => {
      getProducts();
  }).catch((err) => {
      setErrormessage(err);
  });
};
  return (
    <>
   <div className='container mt-3'>
  <div className='row'>
  <div className='col'>
  <h3 className='text-primary text-center'>PRODUCT DETAILS</h3>
  <Link to='/createproduct' className='btn btn-success '>Create Product</Link>
  </div>
  </div>
  <div className='row mt-3'>
   <div className='col'>
  <table className='table table-hover text-center'>
 <thead className='bg-dark text-white'>
<tr>
 <th>S.No</th>
<th>Product Name</th>
 <th>Price</th>
 <th>Qty</th>
 <th>Actions</th>
</tr>
 </thead>
 <tbody>
  {
  products.length>0?<>{
   products.map((product)=>{
    return(
     <tr key={product._id}>
      <td>{product._id.substr(product._id.length-4)}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.qty}</td>
      <td>
          <Link to={`/updateproduct/${product._id}`} className='btn btn-secondary btn-sm text-white mr-3'>Update</Link>
          <button onClick={deleteProduct.bind(this,product._id)} className='btn btn-danger  btn-sm text-white'>Delete</button>
      </td>
     </tr>
    )
   })
  }</>:<>
   <tr>
    <td colSpan='6' className='text-danger font-weight-bold '>********No Products Available************</td>
   </tr>
  </> 
  }
 </tbody>
  </table>
   </div>
  </div>
  </div>
 
    </>
  )
}

export default Productadmin