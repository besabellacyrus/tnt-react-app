import React, { useState, createContext } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider>
      {children}
    </ProductsContext.Provider>
  );
}