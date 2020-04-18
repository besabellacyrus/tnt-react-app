import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Helper from "../helper";
import { useWindowSize } from '../windowSize';
import $ from 'jquery';
import { apiUrl } from '../api';

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
  }, [])

  useEffect(() => {
    Helper.initializeHoverCopy('.pCode');
  }, [props]);

  const handleCheckChange = (event) => {
    let checkboxs = document.querySelectorAll('.kt-checkable');
    console.log({ changecheck: event.target.checked, checkboxs })
    checkboxs.forEach(e => {
      console.log(e.parentNode.parentNode.parentNode)
      deletePusher(e.parentNode.parentNode.parentNode.getAttribute('data-id'))
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
      <tr data-id={e.id} key={e.id}>
        <td></td>
        <td>
          <div className="table-image-profile">
            <img src={apiUrl + e.profile} />
          </div>
        </td>
        <td className="pCode" onClick={handleClickRow}>{e.product_code}</td>
        <td className="pCode" onClick={handleClickRow}>{e.product_title}</td>
        <td onClick={handleClickRow}>0.00</td>
        <td onClick={handleClickRow}>0.00</td>
        <td onClick={handleClickRow}>0.00</td>
        <td onClick={handleClickRow}>0.00</td>
        <td onClick={handleClickRow}>0.00</td>
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
    const table = $('#myTable');

    table.DataTable({
      responsive: true,
      lengthMenu: [5, 10, 25, 50],
      pageLength: 10,
      order: [[1, 'desc']],
      searching: false,
      paging: false,
      info: false,
      columnDefs: [
        { responsivePriority: 1, targets: 0 },
        { responsivePriority: 1, targets: 1 },
        { responsivePriority: 1, targets: 2 },
        { responsivePriority: 2, targets: 3 },
        {
          targets: 0,
          width: '',
          className: 'dt-right details-control',
          orderable: false,
          render: function (data, type, full, meta) {
            return `
            <label class="kt-checkbox kt-checkbox--single kt-checkbox--solid">
                <input type="checkbox" value="" class="kt-checkable">
                <span></span>
            </label>`;
          },
        },
      ]
    });
    table.on('change', '.kt-group-checkable', function () {
      var set = $(this).closest('table').find('td:first-child .kt-checkable');
      var checked = $(this).is(':checked');

      $(set).each(function () {
        if (checked) {
          $(this).prop('checked', true);
          $(this).closest('tr').addClass('active');
        }
        else {
          $(this).prop('checked', false);
          $(this).closest('tr').removeClass('active');
        }
      });
    });

    // table.on('change', 'tbody tr .kt-checkbox', function (e) {
    // $(this).parents('tr').toggleClass('active');
    // deletePusher(e.target.parentNode.parentNode.parentNode.getAttribute('data-id'))
    // props.delItems(deleteItems);
    // console.log({ k: deleteItems })
    // });

    $('.kt-checkable').on('change', function (e) {
      e.stopImmediatePropagation();
      deletePusher(e.target.parentNode.parentNode.parentNode.getAttribute('data-id'))
      props.delItems(deleteItems);
      console.log($(this).is(':checked'))
    })

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
            <th><input type="checkbox" className="kt-group-checkable" onChange={handleCheckChange} /></th>
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
