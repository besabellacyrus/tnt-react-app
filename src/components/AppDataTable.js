import React, { useEffect, useRef } from 'react'
import $ from 'jquery';
import { useHistory } from "react-router-dom";
// const $DataTable = require('datatables.net-responsive');

const AppDataTable = (props) => {
  const history = useHistory();

  const tableEl = useRef(null);
  const { config } = props;
  const headings = []
  const datas = []

  for (const [index, value] of config.headings.entries()) {
    headings.push(<th key={index}>{value}</th>)
  }

  for (const [index, value] of config.data.entries()) {
    datas.push(
      <tr onClick={handleClick} key={index} data-id={value.product_id}>
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
  }, [])

  function handleClick (e) {
    // console.log('clicked', e.target.parentElement.getAttribute('data-id'))
    console.log('classname', e.target.className)
    if (e.target.className !== ' select-checkbox') {
      // history.push("/product/222")
      const productId = e.target.parentElement.getAttribute('data-id')
      console.log({ props })
      history.push(`/product/${productId}`)
    }
  }

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
