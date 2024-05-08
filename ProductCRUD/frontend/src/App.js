import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router,Routes,Route} from'react-router-dom'
 import Home from'./Home'
import Createproduct from './Products/Createproduct'
import ProductList from'./Products/Productlist'
import Productadmin from './Products/Productadmin'
import Updateproduct from './Products/Updateproduct'
const App = () => {
  return (
    <div>
    <Router>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/> 
      <Route path='/products' element={<ProductList/>}/>
      <Route path='/admin' element={<Productadmin/>}/>
   <Route path='/createproduct' element={<Createproduct/>}/> 
   <Route path='/updateproduct/:id' element={<Updateproduct/>}/>
    </Routes>
    </Router>
    
    </div>
  )
}

export default App