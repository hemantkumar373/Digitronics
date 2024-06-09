import React, { useContext, useRef, useState } from 'react' ;
import './navbar.css';
import logo from '../assets/genlogo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';

 export const Navbar=()=>{
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef();

    const drop_toggle=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');

    }
    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} height={90} alt="" />
                {/* <p>SHOPPER</p> */}
            </div>
            <img className='dropdown-icon' onClick={drop_toggle} src={dropdown_icon} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><Link  style={{ textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Mobile")}}><Link  style={{ textDecoration:'none'}} to='/Mobile'>Mobile</Link> {menu==="Mobile"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Laptop")}}><Link style={{ textDecoration:'none'}}  to='/Laptop'>Laptop</Link> {menu==="Laptop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Accessories")}}><Link style={{ textDecoration:'none'}}  to='/Accessories'>Accessories</Link> {menu==="Accessories"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>  
            :   <Link to='/login'><button>Login</button></Link>  }  
           
              <Link to='cart'><img src={cart_icon} alt="" /></Link>  
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
// export default navbar;