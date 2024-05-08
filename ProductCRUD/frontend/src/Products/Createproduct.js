import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
const Createproduct = () => {
  const [product, setProduct] = useState({
    name: '', image: '', price: '', qty: '', info:''
  })
  const [submitted,setSubmitted]=useState(false)
  const [errormessage,setErrormessage]=useState('')
  const changeinput=(e)=>{
    setProduct({...product,[e.target.name]:e.target.value})
  }
  const changeimage=(e)=>{
    let imageFile=e.target.files[0]
    let reader=new FileReader()
    reader.readAsDataURL(imageFile)
    reader.addEventListener('load',()=>{
      if(reader.result){
        setProduct({...product,image:reader.result})
      }
      else{
        alert('Error Occurred')
      }
    })
  }
  const submitproduct=(e)=>{
    e.preventDefault()
    //let dataURL = `http://localhost:5000/task/products/`;
    let dataURL = `http://127.0.0.1:8080/products/create`;
    axios.post(dataURL,product)
    .then((response)=>setSubmitted(true))
    .catch((err)=>setErrormessage(err))
  }
  return (
    <React.Fragment>
    {
      
      submitted ? <><Navigate to='/admin'/></>:
      <>
      <div className='container mt-5'>
      <pre>{JSON.stringify(product)}</pre>
        <div className='row'>
          <div className='col'>
            <h4 className=' text-secondary'>Create a Product</h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-5'>
            <div className='card'>
              <div className='card-header bg-info text-white'>
                <h4 className='text-center'>CREATE PRODUCT</h4>
              </div>
              <div className='card-body'>
                <form onSubmit={submitproduct}>
                  <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Product Name' name='name' value={product.name} onChange={changeinput} />
                  </div>
                  <div className='form-group'>
                    <div className='custom-file'>
                      <input type='file' className='custom-file-input' onChange={changeimage} />
                      <label className='custom-file-label'>Image</label>
                      {
                        product.image && <img src={product.image} alt='' width='20' height='20' />
                      }
                    </div>
                  </div>
                  <div className='form-group'>
                    <input type='number' className='form-control' name='price' value={product.price} onChange={changeinput} placeholder='Product Price' />
                  </div>
                  <div className='form-group'>
                    <input type='number' className='form-control' name='qty' value={product.qty} onChange={changeinput} placeholder='Product QTY' />
                  </div>
                  <div className='form-group'>
                  <input type='text' className='form-control' placeholder='info' name='info' value={product.info} onChange={changeinput} />
                </div>
                  <div className='form-group'>
                    <input type='submit' className='btn btn-dark btn-sm' value='Create Product' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
      </>
      }
      
    </React.Fragment>
  )
}

export default Createproduct