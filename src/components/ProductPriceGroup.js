import React, { useState, useEffect } from 'react'
import AppAccordion from "../components/AppAccordion";
import PriceGroup from "../components/PriceGroup";
const ProductPriceGroup = (props) => {
  const [priceGroups, setPriceGroups] = useState([{ a: 0 }]);

  const handleAddPriceGroup = (e) => {
    if (priceGroups.length <= 2) {
      setPriceGroups(prev => [...prev, { a: 'a' + e }]);
    }
    console.log({ priceGroups })
  }

  const handleRemovePriceGroup = (index) => {
    console.log({ priceGroups })
    const dd = index - 1;
    console.log('a' + dd)
    setPriceGroups(priceGroups.filter(e => e.a !== 'a' + dd));
  }
  const footerButtons = <button className="btn app-btn btn-primary free-width" onClick={props.handleAddProductPrice}>Add Member</button>;

  return (
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
          {/* <PriceGroup addPriceGroup={handleAddPriceGroup} /> */}
          {
            priceGroups.map((e, index) => (
              <React.Fragment>
                <PriceGroup index={index} key={e.a} addPriceGroup={handleAddPriceGroup.bind(null, index)} removePriceGroup={handleRemovePriceGroup.bind(null, index)} />
                <hr></hr>
              </React.Fragment>
            ))
          }
        </form>
      </div>
    </AppAccordion>
  )
}

export default ProductPriceGroup
