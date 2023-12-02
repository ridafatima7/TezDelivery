import React from 'react';
import TNavbar from './TNavbar';
import Footer from './Footer';
import { Row, Container, Col, Input, Button, InputGroup } from 'reactstrap';
import Logo from './Images/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import { BsList } from "react-icons/bs";
import DataProduct from './DataProduct';
import Slider from './TDSlider';
import TDSlider from './TDSlider';
import Offers from './Offers'
import shirt from './Images/shirt.jpeg';
import Exclusive from './Exclusive';
import './TD.css';
import Item from './Item';
import Special from './Special';
import NewCollection from './Ncollection';
import Newsletter from './Newsletter';
const TezDelivery = () => {

  return (
    <>
      <TNavbar />
      <Container className='bg-light' fluid>
        <Row>
          <Col md={6}>
            <div className='d-flex'>
              <div className='div2'>
                <BsList className='menubtn' />
              </div>
              <div className='div3'>
                <p className='para'>Deliver to</p>
                <Input placeholder='Address' name='address' className='bg-light location' />
              </div>
            </div>
          </Col>
          <Col md={6} className='d-flex p-1'>
            <div className='d-flex'>
              <Input className='control' name='mart' placeholder='Search from Mart'><FaSearch /></Input>
              <Button className='dbtn'>Login</Button>
            </div>
            <div>
            </div>
          </Col>
        </Row>
        <section className=' Rslider'>
          <TDSlider className='d-flex ' />
        </section>
        <Row className=' pt-5'>
          <h5 className='sh1'>POPULAR IN WOMEN</h5>
          <div className='popular'>
            <div className='popular-item'>
              {DataProduct.map((item, i) => {
                { console.log(item.image) }
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              })}
            </div>
          </div>
        </Row>
        <Row className='p-5'>
          <div >
            <div>
              <h5 className='sh2'>EXCLUSIVE OFFERS</h5>
            </div>
            <div className='popular-exclusive d-flex'>
              {Offers.map((item, i) => {
                return <Exclusive key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              })}
            </div>
          </div>
        </Row>
        <Row className='p-5'>
          <Special />
        </Row>
        <Row className='p-5'>
          <div className='new-collection'>
            <div>
               <h5 className='sh2'>NEW COLLECTION</h5>
            </div>
            <div className='popular-exclusive d-flex'>
            {NewCollection.map((item, i) => {
                return <Exclusive key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              })}
            </div>
          </div>
        </Row>
        <Row className='p-5'>
          <Newsletter />
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default TezDelivery
