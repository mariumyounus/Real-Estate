import React, { useState } from 'react'
import './Navbar.scss'
import logo from "../Assets/logo1.png"
import menu from "../Assets/menu.png"
import { Link } from'react-router-dom'
const Navbar = () => {
  const [open,setOpen]=useState(false)
  const user=true;
  function handleClick() {
    setOpen(!open)
  }
  return (
    <nav>
        <div className='left'>
        <a href="/" className='logo'><img src={logo} alt=""/>
        <span>RealEstate</span></a>
        <a href="/">Home</a>
        <a href="/list">About</a>
        <a href="/">Contact</a>
        <a href="/list">Agency</a>
        </div>

        <div className='right'> 
       { user ? (<div className='user'>
        <img src="https://images.pexels.com/photos/4646223/pexels-photo-4646223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt=""/>
        <span>Marium</span>
        <Link to="/profile" className='profile'><div className='notification'>3</div>
        <span>Profile</span></Link>
       </div> ) : (<><a href="/">Sign In</a> 
        <a href="/" className='register'>Sign Up</a>
        </>)}
        <div className='menuIcon'>
        <img src={menu}alt="" onClick={handleClick}/>
        
        </div>
        <div className={open ? 'menu active' :'menu'}>
        <a href="/">Home</a>
        <a href="/list">About</a>
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
