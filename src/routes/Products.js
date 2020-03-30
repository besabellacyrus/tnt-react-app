import React, { PureComponent } from 'react'
import $ from 'jquery';
import Search from '../components/Search';
import Card from '../components/Card';
import AppDataTable from '../components/AppDataTable';
import products from '../test/products.json';
import { useHistory } from "react-router-dom";
const $DataTable = require('datatables.net-responsive');

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
          <div className="pull-right">
            <button onClick={handleAddNew} className="btn btn-primary">Add New</button>
            <button className="btn btn-warning">Duplicate</button>
            <button className="btn btn-darkblue">Delete</button>
          </div>
          <div className="clearfix"></div>
          <div className="pull-right">
            <button className="btn btn-default">Copy</button>
            <button className="btn btn-default">CSV</button>
            <button className="btn btn-default">Excel</button>
            <button className="btn btn-default">PDF</button>
            <button className="btn btn-default">Print</button>
          </div>
        </div>
        <Search />
        <AppDataTable config={config} />
      </div>
    </Card >
  )
}

export default Products
