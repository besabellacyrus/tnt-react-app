import React from 'react';
import NavigationWithBack from '../components/NavigationWithBack';
import Card from '../components/Card';
import AppSearch from '../components/AppSearch';
import DateRangePicker from "../components/DateRangePicker";
import ScheduleDataTable from '../components/ScheduleDataTable';
import TableExportButtons from "../components/TableExportButtons";

const AddSchedule = (props) => {

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
    <div className="search-wrapper">
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
        <label className="control-label col-md-3 text-right">Featured Title</label>
        <div className="col-md-9">
          <input type="text" className="form-control" placeholder="Featured Title" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="product-table-actions pull-right mt-10 mb-10">
            <TableExportButtons />
          </div>
        </div>
      </div>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <NavigationWithBack title="Featured Products" />
      <Card subTitle="Featured Schedule" contentLeft={contentLeft} contentRight={contentRight}>
        <div className="table-wrap">
          <ScheduleDataTable />
        </div>
      </Card>
      <div className="pull-right">
        <button className="btn app-btn btn-primary">Preview</button>
        <button className="btn app-btn btn-primary">Save</button>
        <button className="btn app-btn btn-danger">Cancel</button>
      </div>
    </React.Fragment>
  )
}

export default AddSchedule
