import React from 'react'
import Styles from './Header.module.css';
const Header = () => {
  return (
    <div className={Styles.Header}>
    <h1 className ={Styles.logo}>This is Header</h1>
    <button className={Styles.btn}>login</button>
    </div>

  )
}

export default Header
