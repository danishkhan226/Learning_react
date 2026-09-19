import React from 'react'
import './index.css'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Danish khan' age ={18} image='https://cdna.artstation.com/p/marketplace/presentation_assets/003/430/262/large/file.jpg?1706950301' />
      <Card user='Aman' age ={10} image='https://cdna.artstation.com/p/assets/images/images/044/757/424/large/sergey-samsonov-01-render-front-4k-ff-60.jpg?1641070775' />
      <Card user='Rahul' age ={20} image='https://cdna.artstation.com/p/assets/images/images/001/722/092/large/mickael-lelievre-z-pellet.jpg?1451751056' />
      
    </div>    
  )
}

export default App
