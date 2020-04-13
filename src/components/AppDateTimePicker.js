import React, { useEffect, useState, useLayoutEffect } from 'react'
import Script from 'react-load-script';
window.$ = window.jQuery = require('jquery')

const AppDateTimePicker = (props) => {
  useEffect(() => {
    const datepicker = document.querySelectorAll('.date-time-picker-app');
    console.log({ datepicker })
    return () => {
      // cleanup
    }
  })
  return (
    <React.Fragment>
      <div className='input-group date-time-picker-app date'>
        <input type='text' onSelect={props.onSelect} className="form-control" {...props} />
        <span className="input-group-addon">
          <span className="fa fa-calendar"></span>
        </span>
      </div>
      <Script
        url="/bower/jquery/dist/jquery.min.js"
      />
      <Script
        url="/bower/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"
      />
      <Script
        url="/bower/bootstrap-daterangepicker/daterangepicker.js"
      />
      <Script
        url="/bower/datepicker-init.js"
      />
    </React.Fragment>
  )
}

export default AppDateTimePicker
