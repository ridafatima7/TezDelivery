import React,{createContext} from 'react'
import DataProduct from './DataProduct';
import './TD.css';
export const ShopContext=createContext(null);

const ShopContextProvider=(props)=>{
  const contextValue={DataProduct};
  return (
  <ShopContext.Provider value={contextValue} >
    {props.children}
  </ShopContext.Provider>
  )
}
export default ShopContextProvider;