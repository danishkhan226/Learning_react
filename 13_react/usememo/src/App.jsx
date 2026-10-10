import React from 'react'
import { useState, useMemo, useEffect } from 'react'

const num = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000
  }
})
const App = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(num)

  //const magical = number.find(item=>item.isMagical==true) //expensive calculation

  const magical = useMemo(() => number.find(item => item.isMagical === true), [number])

  return (
    <div>
      <h1>{magical.index}</h1>
      <button onClick={() => {
        setCount((count) => (count + 1))
        if (count > 10) {
          setNumber(new Array(10_000_000).fill(0).map((_, i) => {
            return {
              index: i,
              isMagical: i === 9_000_000
            }
          }))
        }
      }}>increase</button>
      <button onClick={() => {
        setCount((count) => (count - 1))
        if(count<-10){
           setNumber(new Array(20_000_000).fill(0).map((_, i) => {
            return {
              index: i,
              isMagical: i === 19_000_000
            }
          }))
        }
      }}>decrease</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App
