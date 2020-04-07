import React from 'react'
import AppSearch from '../components/AppSearch';
import Card from '../components/Card';
import ProductDataTable from '../components/ProductDataTable';
import TableExportButtons from "../components/TableExportButtons";
import products from '../test/products.json';
import { useHistory } from "react-router-dom";

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

  const contentRight = (
    <div className="row">
      <div className="col-sm-12">
        <div className="product-action-btns">
          <button onClick={handleAddNew} className="btn app-btn btn-primary">Add New</button>
          <button className="btn app-btn btn-primary">Duplicate</button>
          <button className="btn app-btn btn-danger">Delete</button>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="product-table-actions pull-right mt-10 mb-10">
          <TableExportButtons />
        </div>
      </div>
    </div>
  )

  const contentLeft = (
    <div className="row product-search">
      <div className="col-sm-12">
      </div>
      <div className="col-sm-12">
        <AppSearch searchables={config.headings} />
      </div>
    </div>
  )

  return (
    <Card title="Products" subTitle="Product List" contentLeft={contentLeft} contentRight={contentRight}>
      <div className="table-wrap">
        <ProductDataTable config={config} />
      </div>
    </Card >
  )
}

export default Products
