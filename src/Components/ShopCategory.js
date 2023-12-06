import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
// import Item from './Item';
import { HiChevronDown } from "react-icons/hi";

const ShopCategory = (props) => {
    const { products } = useContext(ShopContext)
    return (
        <div className='shop-category'>
            <img className='banner' src={props.banner} alt='banner' />
            <div className='shopCategory_indexSort'>
                <p>
                    <span>showing 1-12</span>Out of 36 products
                </p>
                <div className='shopCategory-sort'>
                    Sort by<img src={<HiChevronDown />} alt=''></img>
                </div>
            </div>
            {/* <div className='shopCategory-products'>
                 {products.map((item,i)=>{
                    {console.log(products.name)}
                    if(props.category===item.category)
                    {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else{
                        return null;
                    }      
                 })}
            </div> */}
            <div className='loadmore'>
                Explore More
            </div>
        </div>
  )
}

export default ShopCategory
