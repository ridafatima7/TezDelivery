import React from 'react'
import{Input,Container, Navbar,Nav, Button,NavItem,NavLink, NavbarBrand,Image} from 'reactstrap';
import Logo from './Images/Logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './TDnavbar.css';

const TNavbar = () => {
  return (
    <>
      <div className='NContainer'>
      <div className="navbar" > 
      <div >
        <a href="/">
          <img className='logo' src={Logo} alt="Logo" />
        </a> 
        </div>
        <div className='navdiv '>
            <div> 
              <a href="/">Shop</a>
            </div> 
            <div > 
              <a href="/men">Mens</a>
            </div> 
            <div > 
              <a href="/women">Womens</a>
            </div> 
            <div > 
              <a href="/kids">Kids</a>
            </div> 
            <div > 
              <a style={{fontWeight:'600%'}} href="/checkout/">Checkout</a>
            </div> 
            </div>
       </div> 
      </div>
    
    </>
  )
}

export default TNavbar
