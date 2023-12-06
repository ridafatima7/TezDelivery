import { Button,Input } from 'reactstrap'
import React from 'react'
import './TD.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div >
        <Input name='news' placeholder='your email id'></Input>
        <Button>Subscribe</Button>
      </div>     
    </div>
  )
}

export default Newsletter
