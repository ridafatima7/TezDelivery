import React from 'react'
import{Row,Container,Col} from 'reactstrap';
import Logo from './Images/Logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import './Footer.css';
const Footer = () => {
  return (
    <>
      <Container className='Row3 '>
        <div className=' Row0'>
          <div>
             <div className='text-left'>Call Us Now</div>
              <div>+92300-7654312</div>
              </div>
              <div>
           <div><a href='#' className=" ">About Us</a></div>
           <div><a href='#' className="">Privacy Policy</a></div>
           </div>
           <div>
            <BsFacebook className=" icons " />
            <BsInstagram className=" icons  display-5" />
        </div>
        </div>
        </Container>
        <Container className='Row1 text-white'>
        <Row >
           <div>Copyright 2023 Tez Delivery. All Rights Reserved</div>
        </Row>
      </Container>
    </>
  )
}

export default Footer
