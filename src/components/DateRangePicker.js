import React, { useEffect } from 'react'
import $ from 'jquery';
import 'daterangepicker/daterangepicker.js';

const DateRangePicker = (props) => {
  useEffect(() => {
    $('input[name="daterange"]').daterangepicker();
  }, [])

  return (
    <div className="form-group">
      <div class="input-group date" id="datetimepicker1">
        <input type="text" name="daterange" class="form-control" value={props.schedule} />
        <span class="input-group-addon">
          <span class="fa fa-calendar"></span>
        </span>
      </div>
    </div>
  )
}

export default DateRangePicker
