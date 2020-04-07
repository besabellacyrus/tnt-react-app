import React from 'react'
import Card from '../components/Card'
import AppSearch from '../components/AppSearch'
import DateRangePicker from '../components/DateRangePicker'
import FeaturedProductList from '../components/FeaturedProductList'
import TableExportButtons from "../components/TableExportButtons";

const FeaturedProducts = (props) => {

  const config = {
    headings: [
      'Featured Title',
      'Featured Schedule',
      'In-Stock',
      'Pre-Order',
      'Out Of Stock',
      'Enable',
    ]
  }

  const contentLeft = (
    <div className="row">
      <div className="col-sm-12">
        <AppSearch searchables={config.headings} />
      </div>
      <div className="col-sm-12 form-group mt-10">
        <div className="row">
          <label className="col-sm-3 line-height-3">Date Range:</label>
          <div className="col-sm-9">
            <DateRangePicker schedule="01/01/2020 - 01/15/2020" />
          </div>
        </div>
      </div>
    </div>
  )

  const contentRight = (
    <div className="row">
      <div className="col-sm-12 featured-action-btns">
        <button className="btn app-btn btn-primary">Add New</button>
        <button className="btn app-btn btn-danger">Delete</button>
      </div>
      <div className="col-sm-12">
        <div className="product-table-actions pull-right mt-10 mb-10">
          <TableExportButtons />
        </div>
      </div>
    </div>
  )

  return (
    <Card title="Featured Products" contentLeft={contentLeft} contentRight={contentRight} subTitle="Product Schedule">
      <div className="table-wrap">
        <FeaturedProductList />
      </div>
    </Card>
  )
}

export default FeaturedProducts
