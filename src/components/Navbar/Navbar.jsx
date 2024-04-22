import React, { useState } from 'react'
import './Navbar.scss'
import logo from "../Assets/logo1.png"
import menu from "../Assets/menu.png"
const Navbar = () => {
  const [open,setOpen]=useState(false)
  function handleClick() {
    setOpen(!open)
  }
  return (
    <nav>
        <div className='left'>
        <a href="/" className='logo'><img src={logo} alt=""/>
        <span>RealEstate</span></a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agency</a>
        </div>
        <div className='right'>  <a href="/">Sign In</a>
        <a href="/" className='register'>Sign Up</a>
        <div className='menuIcon'>
        <img src={menu}alt="" onClick={handleClick}/>
        
        </div>
        <div className={open ? 'menu active' :'menu'}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agency</a>
        <a href="/">Sign In</a>
        <a href="/">Sign Up</a>
       
        </div>
        </div>
    </nav>
  )
}

export default Navbar
