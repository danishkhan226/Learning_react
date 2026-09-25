import react from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './page/Home'
import About from './page/about'
import Product from './page/Product'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Notfound from './page/Notfound'
import Men from './page/Men'
import Women from './page/Women'
import Kids from './page/Kids'
import Courses from './page/courses'
import Coursedetail from './page/Coursedetail'
import Navbar2 from './component/navbar2'
const App = () => {
 
  

  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Courses/:courseid' element={<Coursedetail/>}/>
        <Route path='/Product' element={<Product/>}>
          <Route path='Men' element={<Men/>}/>
          <Route path='Women' element={<Women/>}/>
          <Route path='Kids' element={<Kids/>}/>
        </Route>
          <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
       <Navbar2 />
    </div>
  )
}
export default App
