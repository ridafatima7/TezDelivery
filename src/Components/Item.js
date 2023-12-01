import React from 'react'
import './TD.css';

const Item = (props) => {
  return (
    <>
    <div className='main'>
      <div className='item'>
        <img src={props.image} alt='img' />
        <p>{props.name}</p>
        <div className='item-prices'>
           <div className='item_price-new'>
              ${props.new_price}
           </div>
           <div className='item_price-old'>
              ${props.old_price}
           </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Item
