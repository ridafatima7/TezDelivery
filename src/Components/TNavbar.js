import React from 'react'
import{Input,Container, Navbar,Nav, Button,NavItem,NavLink, NavbarBrand,Image} from 'reactstrap';
import Logo from './Images/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TD.css';

const TNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className='bg-light'>
      <Container fluid>
      <Nav className="mr-auto" navbar> 
      <div className='div1'>
        <NavbarBrand href="/">
          <img src={Logo} alt="Logo" fluid />
        </NavbarBrand> 
        </div>
        <div className='Navdiv '>
            <NavItem className=' font-weight-bold pt-3 '> 
            {/* <Link to="/signup" style={{ textDecoration: 'none' }}> */}
              {/* <Button className='Rbutton'>Sign Up</Button> */}
            {/* </Link> */}
              <NavLink href="/">Shop</NavLink>
            </NavItem> 
            <NavItem className='pt-3 font-weight-bold'> 
              <NavLink href="/men">Mens</NavLink>
            </NavItem> 
            <NavItem className='pt-3 font-weight-bold'> 
              <NavLink href="/women">Womens</NavLink>
            </NavItem> 
            <NavItem className='pt-3 font-weight-bold'> 
              <NavLink href="/kids">Kids</NavLink>
            </NavItem> 
            <NavItem className='pt-3 font-weight-bold'> 
              <NavLink style={{fontWeight:'600%'}} href="/checkout/">Checkout</NavLink>
            </NavItem> 
            </div>
       </Nav> 
      </Container>
    </Navbar>
    </>
  )
}

export default TNavbar
