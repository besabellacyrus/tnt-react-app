import React from 'react'
import Card from '../components/Card'
import AppSearch from '../components/AppSearch'
import DateRangePicker from '../components/DateRangePicker'
import FeaturedProductList from '../components/FeaturedProductList'

const FeaturedProducts = (props) => {
  return (
    <Card title="Featured Products" subTitle="Product Schedule">
      <div className="row featured-product-wrapper">
        <div className="col-xs-12 col-sm-12">
          <div className="row">
            <div className="col-sm-2 product-label">
              <label>Search:</label>
            </div>
            <div className="col-sm-10">
              <AppSearch />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 product-label">
              <label>Date Range:</label>
            </div>
            <div className="col-sm-10">
              <DateRangePicker schedule="01/01/2020 - 01/15/2020" />
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12">
          <div className="row">
            <div className="col-md-12">
              <FeaturedProductList />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}



export default FeaturedProducts
