import React from 'react';
import './TD.css';
const Exclusive = (props) => {
  return (
    <>
      <div className='Exclusive'>
        <div className='Exclusive_item'>
          <img src={props.image} alt='img' />
          <p>{props.name}</p>
          <div className='prices'>
            <div className='Exclusive_old'>
              ${props.old_price}
            </div>
            <div className='d-flex'>
              <div className='Exclusive_price-new'>
                ${props.new_price}
              </div>
              <div className='addtocard'>
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exclusive
