import React, { useState, useEffect } from 'react'
// import Card from '../components/Card';
// import { Accordion, AccordionItem } from 'react-light-accordion';
import AppAccordion from '../components/AppAccordion';
import PriceGroup from "../components/PriceGroup";
import ProductPriceGroup from "../components/ProductPriceGroup";
import Helper from "../helper";

import '../styles/components/productPrice.scss';

const ProductPrice = (props) => {
  const [groups, setGroups] = useState([1]);

  // useEffect(() => {
  //   setGroups(<ProductPriceGroup />);
  // }, [])
  const handleAddProductPrice = () => {
    console.log('add product price.');
    // setGroups(prev => [...prev, <ProductPriceGroup />])
    setGroups(prev => [...prev, 1]);
  }

  return (
    <React.Fragment>
      {groups.map(e => (
        <ProductPriceGroup handleAddProductPrice={handleAddProductPrice} />
      ))}
    </React.Fragment>
  )
}

export default ProductPrice
