import React from 'react'
import { useContext } from 'react'
import { PostDataContext } from '../context/ThemeContext'
const Navbar2 = () => {

   const data = useContext(PostDataContext);

  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default Navbar2