import React, { useMemo } from 'react'
import {useState,useCallback} from 'react'
import Navbar from './component/Navbar'
const App = () => {
  const[count , setCount] = useState(0)
  const[adjective,setAdjective] = useState("good")
  const getAdjective = useCallback(()=>{
    return "another"
  },[])
  return (
    <div>
      <Navbar adjective={adjective} getAdjective ={getAdjective}  />
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count=>(count+1))
      }}>+</button>
      <button  onClick={()=>{
        setCount(count=>(count-1))
      }}>-</button>
    </div>
  )
}

export default App
