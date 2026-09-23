import React from 'react'
import './index.css'
const App = () => {

 const submithandler = (e) =>{
     e.preventDefault();
     console.log("form submitted");
 }
  return (
    <div className='app'>
      <form onSubmit={(e) =>{
        submithandler(e);
      }}>
        <input type="text"  placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App