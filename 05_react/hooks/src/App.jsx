import react, { useState } from 'react';
import './index.css'

const App =() => {

const [num, setNum] = useState({username : 'Danish khan' , userage : 22});
const btnclicked = () => {
     setNum(prev=>({...prev, username: 'Vyas', userage: 21}))
 }

  return(

    <div>
      <h2>I am {num.username} , my age is {num.userage}</h2>
     <button onClick={btnclicked}>click here</button>
    </div>
  );
}

export default App;