import React, { useState, createContext, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //setProducts
  }, []);

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {children}
    </ProductsContext.Provider>
  );
}