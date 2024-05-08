import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
   <div className='collapse navbar-collapse'>
  <ul className='navbar-nav'>
   <li className='nav-item'>
<Link to='/' className='nav-link'>Home</Link>
   </li>
   <li className='nav-item'>
  <Link to='/products' className='nav-link'>Products</Link>
   </li>
  </ul>

  <ul className='navbar-nav ml-auto'>
   <li className='nav-item'>
  <Link  to='/admin'className='nav-link'>Admin</Link>
   </li>
  </ul>
   </div>
     </nav>
    </div>
  )
}

export default Navbar