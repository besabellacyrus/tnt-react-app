import React, { useEffect, useState, useLayoutEffect } from 'react';
import $ from 'jquery';
import moment from 'moment';
window.jQuery = $;
window.$ = $;
require('../vendors/bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js')

const AppDateTimePicker = (props) => {

  const handleChange = (e) => {
    console.log({ e })
  }

  useEffect(() => {
    $('.date-time-picker-app').datetimepicker({
      useCurrent: false,
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down"
      },
    }).on('dp.show', function () {
      if ($(this).data("DateTimePicker").date() === null)
        $(this).data("DateTimePicker").date(moment());
    });
  })

  return (
    <React.Fragment>
      <div className='input-group date-time-picker-app date'>
        <input type='text' onSelect={props.onSelect} className="form-control" {...props} />
        <span className="input-group-addon">
          <span className="fa fa-calendar"></span>
        </span>
      </div>
    </React.Fragment>
  )
}

export default AppDateTimePicker
