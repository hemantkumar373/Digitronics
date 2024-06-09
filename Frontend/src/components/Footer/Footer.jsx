import React from 'react'
import './Footer.css'
import footer_logo from '../assets/genlogo.png'

const Footer=()=>{
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
            </div>
            <ul className="footer-links">
                <br />
                <li>Contact -9350702963</li>
                <li>Gmail-jayant932002@gmail.com</li>
            </ul>
            <ul>
                <li>Panipat, Haryana</li>
            </ul>
            <br />
            <br />
    
        </div>
        
    )
}
export default Footer