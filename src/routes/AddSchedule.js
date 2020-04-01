import React from 'react';
import NavigationWithBack from '../components/NavigationWithBack';
import Card from '../components/Card';
import AppSearch from '../components/AppSearch';
import DateRangePicker from "../components/DateRangePicker";
import ScheduleDataTable from '../components/ScheduleDataTable';

const AddSchedule = (props) => {
  return (
    <React.Fragment>
      <NavigationWithBack title="Featured Products" />
      <Card subTitle="Featured Schedule">
        <div className="row">
          <div className="form-group">
            <div className="col-sm-2 product-label">
              <label>Search:</label>
            </div>
            <div className="col-sm-5">
              <AppSearch />
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
        </div>
        <ScheduleDataTable />
      </Card>
      <div className="pull-right">
        <button className="btn app-btn app-btn-default">Preview</button>
        <button className="btn app-btn app-btn-default">Save</button>
        <button className="btn app-btn-cancel">Cancel</button>
      </div>
    </React.Fragment>
  )
}

export default AddSchedule
