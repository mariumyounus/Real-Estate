import React from 'react'
import './Navbar.scss'
import logo from "../Assets/logo1.png"
const Navbar = () => {
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
        <a href="/" className='register'>Sign Up</a></div>
    </nav>
  )
}

export default Navbar
