import React from 'react';
import NavigationWithBack from '../components/NavigationWithBack';
import Card from '../components/Card';
import AppSearch from '../components/AppSearch';
import DateRangePicker from "../components/DateRangePicker";
import ScheduleDataTable from "../components/ScheduleDataTable";
import TableExportButtons from "../components/TableExportButtons";

const AddSpecialDeals = (props) => {
  const config = {
    headings: [
      'Profile',
      'Product Code',
      'Product Title',
      'Featured',
      'Home Featured',
      'Ranking'
    ]
  }
  const contentLeft = (
    <div className="search-wrapper special-deal-search">
      <div className="row">
        <div className="col-sm-12">
          <AppSearch searchables={config.headings} />
        </div>
        <div className="col-sm-12 mt-10">
          <div className="row">
            <label className="col-sm-3">Set Schedule:</label>
            <div className="col-sm-9">
              <DateRangePicker schedule="01/01/2020 - 01/15/2020" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  const contentRight = (
    <React.Fragment>
      <div className="row">
        <label className="col-sm-3">Background Photo:</label>
        <div className="col-sm-9 bg-photo-top">
          <img src="/img/sample-bg-photo.jpg" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="product-table-actions pull-right mb-10">
            <TableExportButtons />
          </div>
        </div>
      </div>
      {/* <div className="pull-right mb-10">
        <div className="bg-photo-top">
          <label>Background Photo:</label>
          <img src="/img/thumbnail/MEZ76515_1920.jpg" alt="background photo" />
        </div>
      </div>
      <div className="product-table-actions pull-right mb-10">
        <TableExportButtons />
      </div> */}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <NavigationWithBack title="Special Deals" />
      <Card subTitle="Special Deals Schedule" contentLeft={contentLeft} contentRight={contentRight}>
        {/* <div className="row">
          <div className="col-sm-7">
          </div>
          <div className="col-sm-5">
            <label className="col-sm-5">
              Background Photo:
          </label>
            <div className="col-sm-7">
              <div className="bg-photo-top">
                <img src="/img/user.png" alt="background photo" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <div className="col-sm-2 product-label">
              <label>Search:</label>
            </div>
            <div className="col-sm-5">
            </div>
            <div className="col-sm-5">
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <div className="col-sm-2 product-label">
              <label>Set Schedule:</label>
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
        </div> */}
        <ScheduleDataTable />
      </Card>
      <div className="pull-right">
        <button className="btn app-btn btn-primary">Preview</button>
        <button className="btn app-btn btn-primary">Save</button>
        <button className="btn app-btn-cancel">Cancel</button>
      </div>
    </React.Fragment>
  )
}

export default AddSpecialDeals
