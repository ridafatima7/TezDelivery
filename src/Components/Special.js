import React from 'react'
import specialoffer from './Images/image.png';
const Special = () => {
  return (
    <>
      <div className='offers'>
        <div className='offers-left'>
           <h1>Special </h1>
           <h1>Offers for You</h1>
           <p>ONLY ON BEST SELLERS PRODUCT</p>
           <button>Check Now</button>
        </div>
        <div className='offers-right'>
           <img src={specialoffer} alt='specialoffer' />
        </div>
      </div>
    </>
  )
}

export default Special
