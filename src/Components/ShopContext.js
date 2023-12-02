import React,{createContext} from 'react'
import DataProduct from './DataProduct';
export const ShopContext=createContext(null);

const ShopContextProvider=(props)=>{
  const contextValue={DataProduct};
  return (
  <ShopContext.Provider value={contextValue} >
    {props.Children}
  </ShopContext.Provider>
  )
}
export default ShopContextProvider;