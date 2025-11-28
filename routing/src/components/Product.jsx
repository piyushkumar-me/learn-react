import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
        <div>
          <Link to='/Product/Women'>women</Link>
          <Link to='/Product/Men'>men</Link>
          
        </div>

        <h1>producgt</h1>
       <Outlet/>
    </div>
  )
}

export default Product