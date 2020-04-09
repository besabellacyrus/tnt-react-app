import React, { useEffect } from 'react'
import $ from 'jquery';
import 'daterangepicker/daterangepicker.js';

const DateRangePicker = (props) => {
  useEffect(() => {
    $('input[name="daterange"]').daterangepicker();
  }, [])

  const onChangeHandler = () => {
    //
  }
  return (
    <div className="form-group">
      <div className="input-group date" id="datetimepicker1">
        <input type="text" name="daterange" onChange={onChangeHandler} className="form-control" value={props.schedule} />
        <span className="input-group-addon">
          <span className="fa fa-calendar"></span>
        </span>
      </div>
    </div>
  )
}

export default DateRangePicker
