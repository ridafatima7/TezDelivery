import React from 'react'
import{Row,Container,Col} from 'reactstrap';
import Logo from './Images/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import './TD.css';
const Footer = () => {
  return (
    <>
      <Container className='Container1' fluid >
        <Row className=' Row0 pt-4 pb-5  ml-4 text-white'>
          <Col md={4} sm={6}  className='col0'>
             <div className='text-left'>Call Us Now</div>
              <div>+92300-7654312</div>
          </Col >
          <Col className='Col1' md={4} sm={6}>
           <div><a href='#' className="  text-white ">About Us</a></div>
           <div><a href='#' className="text-white">Privacy Policy</a></div>
          </Col>
          <Col md={4} sm={12} className='col2'>
            <BsFacebook className=" icons text-white display-5" />
            <BsInstagram className=" icons text-white display-5" />
          </Col>
        </Row>
        </Container>
        <Container className='Row1 text-white' fluid>
        <Row >
           <div>Copyright 2023 Tez Delivery. All Rights Reserved</div>
        </Row>
      </Container>
    </>
  )
}

export default Footer
