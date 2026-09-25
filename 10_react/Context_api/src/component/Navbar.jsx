import { useContext } from 'react'
import { PostDataContext } from '../context/ThemeContext'

const Navbar = () => {
  const data = useContext(PostDataContext)

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">My Website</h2>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <p className="navbar-value">{data}</p>
    </nav>
  )
}

export default Navbar