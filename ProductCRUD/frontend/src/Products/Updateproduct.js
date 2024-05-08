import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Navigate, useParams } from 'react-router-dom'

const Updateproduct = () => {
    const [productId,setProductId]=useState(useParams().id)
    const [selectedproduct,setSelectedproduct]=useState({
        name:'',image:'',price:'',qty:'',info:''
    })
    const [submitted,setSubmitted]=useState(false)
    const[errormessage,setErrormessage]=useState('')
    const  changeinput=(e)=>{
        setSelectedproduct({...selectedproduct,[e.target.name]:e.target.value})
    }
    useEffect(() => {

        //let dataurl = `http://127.0.0.1:8080/products/${productId}`;
        let dataurl = `http://127.0.0.1:8080/products/${productId}`;
        axios.get(dataurl)
        .then((resp)=>{
          console.log(resp.data)
          setSelectedproduct(resp.data)
        })
        .catch((err)=>setErrormessage(err))
    }, [])
    const  changeimage=(e)=>{
        let imageFile=e.target.files[0]
        let reader=new FileReader()
        reader.readAsDataURL(imageFile)
        reader.addEventListener('load',()=>{
            if(reader.result){
                setSelectedproduct({
                    ...selectedproduct,image:reader.result
                })
            }
            else{
                alert('error occured')
            }
        })
    }
    let submitproduct=(e)=>{
        e.preventDefault()
        let dataurl = `http://127.0.0.1:8080/products/update/${productId}`;
        axios.put(dataurl,selectedproduct)
        .then((response)=>setSubmitted(true))
        .catch((err)=>setErrormessage(err))
    }
  return (
    <React.Fragment>
    <pre>{JSON.stringify(selectedproduct)}</pre>
    {submitted ?<><Navigate to='/admin'/></>:
    <>
    <div className='container mt-3'>
   <div className='row'>
   <div className='col '>
 <h3 className='text-secondary'>Update a Product</h3>
   </div>
   </div>
   <div className='row'>
  <div className='col-md-5'>
  <div className='card'>
  <div className='card-header bg-secondary text-white'>
  <h4 className='text-center'>UPDATE PRODUCT</h4>
  </div>
  <div className='card-body'>
<form onSubmit={submitproduct}>
    <div className='form-group'>
   <input type='text' placeholder='Product Name'className='form-control' name='name' value={selectedproduct.name} onChange={changeinput}/>
    </div>
    <div className='form-group'>
<div className='custom-file'>
<input type='file' className='custom-file-input' onChange={changeimage}/>
<label className='custom-file-label'>Image</label> 
</div>
    </div>
    <div className='form-group'>
 <input type='number' placeholder='Product Price' className='form-control' name='price' value={selectedproduct.price} onChange={changeinput}/>
    </div>
    <div className='form-group'>
    <input type='text' placeholder='info'className='form-control' name='info' value={selectedproduct.info} onChange={changeinput}/>
     </div>
    <div className='form-group'>
  <input type='number' placeholder='Product Qty' className='form-control' name='qty' value={selectedproduct.qty} onChange={changeinput}/>
    </div>
    <div className='form-group'>
   <input type='submit' className='btn btn-primary btn-sm' value='Update Product'/>
    </div>
</form>
  </div>
</div>
  </div>
   </div>
  </div>
    </>}
 
    </React.Fragment>
  )
}

export default Updateproduct