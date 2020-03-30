import React, { useEffect, useRef } from 'react'
import $ from 'jquery';
const $DataTable = require('datatables.net-responsive');

const AppDataTable = (props) => {
  const tableEl = useRef(null);
  const { config } = props;
  const headings = []
  const datas = []

  for (const [index, value] of config.headings.entries()) {
    headings.push(<th key={index}>{value}</th>)
  }

  for (const [index, value] of config.data.entries()) {
    datas.push(
      <tr key={index}>
        <td><img src={value.profile} /></td>
        <td>{value.product_code}</td>
        <td>{value.product_title}</td>
        <td>{value.price_a}</td>
        <td>{value.price_b}</td>
        <td>{value.price_c}</td>
        <td>{value.retail_price}</td>
        <td>{value.product_cost}</td>
      </tr>
    )
  }

  useEffect(() => {
    $('#product-table').DataTable({
      bFilter: false,
      bInfo: false,
      responsive: true,
      columnDefs: [{
        orderable: false,
        className: 'select-checkbox',
        targets: 0
      }],
      select: {
        style: 'os',
        selector: 'td:first-child'
      },
      order: [[1, 'asc']]
    });

    $('#product-table tbody').on('click', 'tr', function () {
      console.log('clicked')
    })
  }, [])

  return (
    <table ref={tableEl} id="product-table" className="table table-hover display pb-30">
      <thead>
        <tr>
          {headings}
        </tr>
      </thead>
      <tbody>
        {datas}
      </tbody>
    </table>
  )
}

export default AppDataTable
