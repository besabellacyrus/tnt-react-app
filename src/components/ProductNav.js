import React from 'react'
import { useHistory } from "react-router-dom";
import NavigationWithBack from './NavigationWithBack';

const ProductNav = () => {
  const history = useHistory();

  const handleBackBtn = () => {
    history.push('/products')
  }
  return (
    <React.Fragment>
      <NavigationWithBack title="Products" />
      <div className="row">
        <div className="col-md-12">
          <div className="mt-20 pills-struct product-tabs">
            <ul role="tablist" className="app-product-nav pull-right nav nav-pills" id="myTabs_6">
              <li className="active" role="presentation"><a aria-expanded="true" data-toggle="tab" role="tab" id="product_info_tab" href="#product_info">Product Information</a></li>
              <li role="presentation" className=""><a data-toggle="tab" id="product_media_tab" role="tab" href="#product_media" aria-expanded="false">Product Media</a></li>
              <li role="presentation" className=""><a data-toggle="tab" id="product_price_tab" role="tab" href="#product_price" aria-expanded="false">Product Price</a></li>
              <li role="presentation" className=""><a data-toggle="tab" id="product_supplier_tab" role="tab" href="#product_supplier" aria-expanded="false">Product Supplier</a></li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductNav
