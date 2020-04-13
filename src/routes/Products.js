import React, { useEffect, useState } from 'react'
import AppSearch from '../components/AppSearch';
import Card from '../components/Card';
import ProductDataTable from '../components/ProductDataTable';
import TableExportButtons from "../components/TableExportButtons";
import { useHistory } from "react-router-dom";
import { AppGet } from '../api';




const Products = (props) => {
  const history = useHistory();
  const [product, setProduct] = useState([]);
  const config = {
    headings: [
      'Profile',
      'Product Code',
      'Product Name',
      'Price A',
      'Price B',
      'Price C',
      'Retail Price',
      'Product Cost',
    ],
    data: product
  }
  useEffect(() => {
    const products = AppGet('product').then((res) => {
      console.log(res)
      if (res.data) {
        setProduct(res.data)
      }
    }).catch((e) => {
      console.log(e)
    })
  }, [])

  function handleAddNew () {
    history.push('/add-product')
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
    <React.Fragment>
      <Card title="Products" subTitle="Product List" contentLeft={contentLeft} contentRight={contentRight}>
        <div className="table-wrap">
          <ProductDataTable config={config} />
        </div>
      </Card>
    </React.Fragment>
  )
}

export default Products
