import react,{useState} from 'react'
import axios from 'axios'

const App = () => {

 const [data, setData] = useState([])

 const Getdata = async () => {
         const response = await axios.get('https://picsum.photos/v2/list')
        
          setData(response.data)
 }

  return (
   
    <div>
       <button onClick={Getdata}>data</button>
       <div>
    
            {data.map(function(elem,idx){
                    return(<h1>Hello {elem.author} {idx}</h1>)
            })}
           
       </div>
    </div>
  )
}

export default App;