import axios from 'axios'
import { useState, useEffect } from 'react'


const App = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(function(){
     const Getdata = async () => {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        setData(response.data); 
     }

      Getdata();
  },[page])

  return (
    <div>
      <button onClick={() => setPage(1)}>1</button>
      <button onClick={() => setPage(2)}>2</button>
      <div>
         {data.map((elem)=>(
             <div key={elem.id}>
               <img src={elem.download_url} alt={elem.author} width="200" />
               <div>{elem.author}</div>
             </div>
         ))}
      </div>
    </div>
  )
}

export default App;