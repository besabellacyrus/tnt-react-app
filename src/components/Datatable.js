import React, { useEffect } from 'react'
import $ from 'jquery';
require('datatables.net-responsive');

const Datatable = (props) => {
  useEffect(() => {
    $('.app-data-table').DataTable({
      bFilter: false,
      bInfo: false,
      responsive: true,
    });
  }, [])

  return (
    <table className="app-data-table table display nowrap table-hover pb-30" width="100%">
      <thead>
        <tr>
          {props.headings}
        </tr>
      </thead>
      <tbody>
        {props.datas}
      </tbody>
    </table>
  )
}

export default Datatable
