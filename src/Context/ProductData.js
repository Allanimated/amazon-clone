import React from "react";
import { useState } from "react";

const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return (
    <ProductContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
