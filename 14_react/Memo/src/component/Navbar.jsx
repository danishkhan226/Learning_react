import React from 'react'
import {memo} from 'react'
const Navbar = (adjective,getAdjective) => {
    console.log("navbar rendering")
  return (
    <div>
      I am {adjective.adjective} 
      <button onClick={()=>{
        getAdjective()
      }}>Change me</button>
    </div>
  )
}

export default memo(Navbar)
