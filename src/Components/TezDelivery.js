import React from 'react';
import TNavbar from './TNavbar';
import Footer from './Footer';
import { Row, Container, Col, Input, Button, InputGroup } from 'reactstrap';
import Logo from './Images/Logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div className='TContainer' >
        <section >
          <div className='section1'>
            <div>
              <div className='div2'>
                <BsList className='menubtn' />
              </div>
              <div className='div3'>
                <p className='para'>Deliver to</p>
                <Input placeholder='Address' name='address' className='bg-light location' />
              </div>
            </div>
            <div className='central'>
              <Input className='control' name='mart' placeholder='Search from Mart'><FaSearch /></Input>
              <Button className='dbtn'>Login</Button>
            </div>
            <div>
            </div>
          </div>
        </section>
        <section className=' Rslider'>
          <TDSlider className='d-flex ' />
        </section>
        <section className='sectionMargin'>
          <h5 className='sh1'>POPULAR IN WOMEN</h5>
          <div className='popular'>
            <div className='popular-item'>
              {DataProduct.map((item, i) => {
                { console.log(item.image) }
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              })}
            </div>
          </div>
        </section>
        <section >
          <div >
            <div>
              <h5 className='sh2'>EXCLUSIVE OFFERS</h5>
            </div>
            <div className='popular-exclusive '>
              {Offers.map((item, i) => {
                return <Exclusive key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              })}
            </div>
          </div>
        </section>
        <section className=' Rslider'>
          <Special />
        </section>
        <section >
          <div className='new-collection'>
            <div>
               <h5 className='sh2'>NEW COLLECTION</h5>
            </div>
            <div className='popular-exclusive '>
            {NewCollection.map((item, i) => {
                return <Exclusive key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              })}
            </div>
          </div>
        </section>
        <section className=' Rslider'>
          <Newsletter />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default TezDelivery
