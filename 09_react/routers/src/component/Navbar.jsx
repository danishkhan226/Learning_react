import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 px-4 bg-cyan-900 justify-between items-center'>
      <h2 className='text-2xl font-bold'>Danish</h2>
      <div className='flex gap-10'>
        <Link to='/' className='text-lg font-medium'>Home</Link>
        <Link to='/About' className='text-lg font-medium'>About</Link>
         <Link className='text-lg font-medium' to='/Courses'>Courses</Link>
        <Link to='/Product' className='text-lg font-medium'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar