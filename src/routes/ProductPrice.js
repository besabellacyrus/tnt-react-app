import React, { useState } from 'react'
import Card from '../components/Card';
import { Accordion, AccordionItem } from 'react-light-accordion';
// import 'react-light-accordion/demo/css/index.css';
import AppAccordion from '../components/AppAccordion';
import PriceGroup from "../components/PriceGroup";

import '../styles/components/productPrice.scss';

const ProductPrice = (props) => {
  const [priceGroups, setPriceGroups] = useState([]);

  const handleAddPriceGroup = (e) => {
    if (priceGroups.length <= 2) {
      setPriceGroups(prev => [...prev, 1]);
    }
  }

  const footerButtons = <button className="btn app-btn btn-primary free-width">Add Member</button>;

  return (
    <React.Fragment>
      <AppAccordion title="Product Price Member 1" footer={footerButtons}>
        <div className="row">
          <form>
            <div className="row mb-10">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="col-sm-2 pp-label">
                    <label>For Member</label>
                  </div>
                  <div className="col-sm-10">
                    <select className="selectpicker form-control btn-default btn-outline" data-style="">
                      <option>Default Member</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <PriceGroup addPriceGroup={handleAddPriceGroup} />
            {
              priceGroups.map(e => (
                <React.Fragment>
                  <hr></hr>
                  <PriceGroup addPriceGroup={handleAddPriceGroup} />
                </React.Fragment>
              ))
            }
          </form>
        </div>
      </AppAccordion>
    </React.Fragment>
  )
}

export default ProductPrice
