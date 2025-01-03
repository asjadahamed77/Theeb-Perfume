import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext()

const ShopContextProvider = (props)=> {

   const currency = 'Rs'
   

  

   


    const value = {
        currency,
        
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider