import React, { useEffect, useState } from 'react'
import AppSearch from '../components/AppSearch';
import Card from '../components/Card';
import TableExportButtons from "../components/TableExportButtons";
import AppTable from "../components/AppTable";
import { useHistory } from "react-router-dom";
import { AppGet, AppDelete } from '../api';

const Products = (props) => {
  const history = useHistory();
  const [product, setProduct] = useState([]);
  const [deleteItems, setDeleteItems] = useState([])

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
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    AppGet('/api/product').then((res) => {
      console.log(res)
      if (res.data) {
        setProduct(res.data);
      }
    }).catch((e) => {
      console.log(e)
    })
  }

  const handleDeleteItems = (e) => {
    setDeleteItems(e)
  }

  const handleAddNew = () => {
    history.push('/add-product')
  }

  const handleDelete = () => {

    if (deleteItems.length > 0) {
      if (window.confirm(`Delete this items?`)) {
        AppDelete(`/api/product/`, deleteItems)
          .then(res => {
            console.log({ res })
            if (res.data.status === 'deleted') {
              fetchProducts();
            }
          })
          .catch(err => {
            console.log({ err })
          })
      }
    }
  }

  const contentRight = (
    <div className="row">
      <div className="col-sm-12">
        <div className="product-action-btns">
          <button onClick={handleAddNew} className="btn app-btn btn-primary">Add New</button>
          <button className="btn app-btn btn-primary">Duplicate</button>
          <button onClick={handleDelete} className="btn app-btn btn-danger">Delete</button>
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
          <AppTable data={product} delItems={handleDeleteItems} />
        </div>
      </Card>
    </React.Fragment>
  )
}

export default Products
