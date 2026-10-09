import {useState , useEffect , useRef} from 'react'

const App = () =>{
  const[name,setName] = useState("");
  const a = useRef(5)
  useEffect(()=>{
   console.log('rendering...')
  },[name])
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <input type="text" ref ={a} defaultValue={a.current} />
      <button onClick={()=>{console.log(a.current.value)}}>getrefdata</button>
    </div>
  )
}

export default App