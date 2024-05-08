import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Productlist = () => {
  const [products,setProducts]=useState([])
  const [errormessage,setErrormessage]=useState('')
  useEffect(() => {
    //let dataURL = `http://localhost:5000/task/products`;
    let dataURL = `http://127.0.0.1:8080/products/read`;
    axios.get(dataURL).then((response) => {
        setProducts(response.data);
    }).catch((err) => {
        setErrormessage(err);
    });
  }, [])
  return (
    <React.Fragment>
  <div className='contaniner mt-5'>
   <div className='row'>
  <div className='col'>
 <h3 className='text-success text-center'>PRODUCTS PAGE</h3>
  </div>
   </div>
   <div className='row'>
{
 products.length>0?
 <>
  {
products.map((product)=>{
  return(
    <div key={product._id} className='col-md-3'>
<div className='card mt-5'>
<div className='card-header text-center bg-white'>
<img src={product.image} alt='' width='150' height='150'/>
</div>
<div className='card-body'>
<ul className='list-group'>
  <li className='list-group-item'>
   Product Name:{product.name}
  </li>
  <li className='list-group-item'>
Price :{product.price}
  </li>
  <li className='list-group-item'>
  Quantity :{product.qty}
  </li>
</ul>
</div>
</div>
    </div>
  )
})
  }
 </>:
 <>
  <div>
    <h3 className='text-center text-danger'>*****No Products Available*****</h3>
  </div>
 </>
}
   </div>
  </div>
    </React.Fragment>
  )
}

export default Productlist