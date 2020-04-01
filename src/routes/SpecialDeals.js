import React from 'react'
import Card from '../components/Card'
import AppSearch from '../components/AppSearch'
import DateRangePicker from '../components/DateRangePicker'
import FeaturedProductList from '../components/FeaturedProductList'
import SpecialDealList from '../components/SpecialDealList'

const SpecialDeals = (props) => {
  return (
    <Card title="Special Deals" subTitle="Special Deals Schedule">
      <div className="featured-product-wrapper">
        <div className="row">
          <div className="form-group">
            <div className="col-sm-2 product-label">
              <label>Search:</label>
            </div>
            <div className="col-sm-5">
              <AppSearch />
            </div>
            <div className="col-sm-5">
              <div className="pull-right">
                <button className="btn app-btn btn-primary">Add New</button>
                <button className="btn app-btn app-btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <div className="col-sm-2 product-label">
              <label>Date Range:</label>
            </div>
            <div className="col-sm-5">
              <DateRangePicker schedule="01/01/2020 - 01/15/2020" />
            </div>
            <div className="col-sm-5 mb-20">
              <div className="product-table-actions pull-right">
                <button className="app-btn app-btn-gray">Copy Table</button>
                <button className="app-btn app-btn-gray">CSV</button>
                <button className="app-btn app-btn-gray">Excel</button>
                <button className="app-btn app-btn-gray">PDF</button>
                <button className="app-btn app-btn-gray">Print</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <div className="col-sm-2 product-label">
              <label>Product Inventory:</label>
            </div>
            <div className="col-sm-5">
              <select className="form-control">
                <option value="">In-Stock</option>
                <option value="">Pre-Order</option>
                <option value="">Almost Gone</option>
                <option value="">Sold Out</option>
              </select>
            </div>
            <div className="col-sm-5"></div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12">
          <div className="row">
            <div className="col-md-12">
              <SpecialDealList />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}



export default SpecialDeals
