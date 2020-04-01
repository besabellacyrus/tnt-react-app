import React from 'react'
import AppSearch from '../components/AppSearch';
import Card from '../components/Card';
import AppDataTable from '../components/AppDataTable';
import products from '../test/products.json';
import { useHistory } from "react-router-dom";

let scripts = []

const config = {
  headings: [
    'Profile',
    'Product Code',
    'Product Title',
    'Price A',
    'Price B',
    'Price C',
    'Retail Price',
    'Product Cost',
  ],
  data: products
}

const Products = () => {
  const history = useHistory();

  function handleAddNew () {
    history.push('/product/222')
  }

  return (
    <Card title="Products" subTitle="Product List">
      {/* will make this a component later */}
      <div className="table-wrap tablesaw-overflow">
        <div id="app-table-header-btns">
          <div className="product-action-btns pull-right">
            <button onClick={handleAddNew} className="btn app-btn btn-primary">Add New</button>
            <button className="btn app-btn btn-warning">Duplicate</button>
            <button className="btn app-btn btn-darkblue">Delete</button>
          </div>
          <div className="clearfix"></div>
          <div className="product-table-actions pull-right mt-10 mb-10">
            <button className="app-btn app-btn-gray">Copy Table</button>
            <button className="app-btn app-btn-gray">CSV</button>
            <button className="app-btn app-btn-gray">Excel</button>
            <button className="app-btn app-btn-gray">PDF</button>
            <button className="app-btn app-btn-gray">Print</button>
          </div>
        </div>
        <div className="col-sm-6">
          <AppSearch />
        </div>
        <AppDataTable config={config} />
      </div>
    </Card >
  )
}

export default Products
