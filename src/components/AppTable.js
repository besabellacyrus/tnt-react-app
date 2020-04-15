import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Helper from "../helper";
import { useWindowSize } from '../windowSize';
import $ from 'jquery';
require('datatables.net-responsive');



const AppTable = (props) => {
  const history = useHistory();
  const [headers, setHeaders] = useState([]);
  const [width, height] = useWindowSize()

  const uiHeaders = [];
  const uiRows = [];
  let deleteItems = [];

  useEffect(() => {
    console.log({ props })
    setHeaders([
      'Profile',
      'Product Code',
      'Product Title',
      'Price A',
      'Price B',
      'Price C',
      'Retail Price',
      'Product Cost'
    ]);

    Helper.initializeHoverCopy('.pCode');

  }, [])

  const handleCheckChange = (event) => {
    console.log({ changecheck: event.target.checked })
    let checkboxs = document.querySelectorAll('.details-control');
    checkboxs.forEach(e => {
      deletePusher(e.parentNode.parentNode.getAttribute('data-id'))
      e.checked = event.target.checked;
    })
    console.log({ deleteItems })
    props.delItems(deleteItems);
  }

  const deletePusher = (trId) => {
    deleteItems.indexOf(trId) === -1 ? deleteItems.push(trId) : deleteItems.splice(deleteItems.indexOf(trId), 1);
  }

  const handleClickRow = (event) => {
    try {
      const trId = event.target.parentNode.parentNode.getAttribute('data-id')

      deleteItems.indexOf(trId) === -1 ? deleteItems.push(trId) : deleteItems.splice(deleteItems.indexOf(trId), 1);
      props.delItems(deleteItems);

      if (event.target.id !== 'hover-copy' && event.target.className !== 'details-control') {
        const productId = event.target.parentNode.getAttribute('data-id');
        history.push(`/product/${productId}`)
      }
    } catch (error) {
      console.log({ error })
    }
  }

  const bigSizeRows = (e) => {
    return (
      <tr data-id={e.id} key={e.id} onClick={handleClickRow}>
        <td>
          <div className="table-image-profile">
            <img src={e.profile} />
          </div>
        </td>
        <td className="pCode">{e.product_code}</td>
        <td className="pCode">{e.product_title}</td>
        <td>0.00</td>
        <td>0.00</td>
        <td>0.00</td>
        <td>0.00</td>
        <td>0.00</td>
      </tr>
    )
  }

  try {
    if (props.data.data) {
      props.data.data.forEach(e => {
        uiRows.push(bigSizeRows(e))
      })
    }
  } catch (error) {
    console.log({ error })
  }


  headers.forEach(e => {
    uiHeaders.push(
      <th key={e}>{e}</th>
    )
  })

  const initializeDatatable = () => {
    $.fn.dataTable.ext.errMode = 'none';
    $('#myTable').DataTable({
      responsive: true,
      lengthMenu: [5, 10, 25, 50],
      pageLength: 10,
      order: [[1, 'desc']],
      searching: false,
      paging: false,
      info: false
    });
  }

  useEffect(() => {
    // initializeDatatable();
    return () => {
      console.log('props')
      setTimeout(() => {
        initializeDatatable();
      }, 1000)
    }
  }, [props])

  return (
    <div className="app-table-wrapper">
      <table id="myTable" className="table table-hover display dt-responsive nowrap mt-20" width="100%">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Product Code</th>
            <th>Product Name</th>
            <th>Price A</th>
            <th>Price B</th>
            <th>Price C</th>
            <th>Retail Price</th>
            <th>Product Cost</th>
          </tr>
        </thead>
        <tbody className="app-tbody">
          {uiRows}
        </tbody>
      </table>
    </div>
  )
}

export default AppTable
