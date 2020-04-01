import React, { useEffect } from 'react'
import $ from 'jquery';
require('datatables.net-responsive');

const Datatable = (props) => {
  useEffect(() => {
    $('#app-data-table').DataTable({
      // bFilter: false,
      // bInfo: false,
      responsive: true,
      // select: {
      //   style: 'os',
      //   selector: 'td:first-child'
      // },
      // order: [[1, 'asc']]
    });
  }, [])

  return (
    <table id="app-data-table" className="table table-hover display pb-30">
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
