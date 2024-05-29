import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/genlogo.png'
import navProfile from'../../assets/genlogo.png'

const Navbar=()=>{
  return(
    <div className='navbar'>
        <img src={navlogo} alt="not" className="nav-logo" />
        <img src={navProfile} alt="not" className="nav-profile" />
    </div>
  )
} 

export default Navbar