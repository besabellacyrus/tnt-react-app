import React, { useEffect, useLayoutEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import Helper from '../helper';
import $ from 'jquery';
import products from '../test/productInventory.json';
require('datatables.net-responsive');

function useWindowSize () {
  const [size, setSize] = useState([window.innerWidth, 0]);
  useLayoutEffect(() => {
    function updateSize () {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const ProductInventoryTable = (props) => {
  const [width, height] = useWindowSize();
  const [pushCounter, setPushCounter] = useState(true);

  const sumQty = (accumulator, currentValue) => accumulator.qty + currentValue.qty;
  const sumCostVal = (accumulator, currentValue) => accumulator.cost_value + currentValue.cost_value;
  const sumRetailVal = (accumulator, currentValue) => accumulator.retail_value + currentValue.retail_value;

  let theads = []
  let tdetails = []

  useEffect(() => {
    Helper.initializeHoverCopy('.pCode');
  }, [])

  const headings = [
    "Profile",
    "Product Code",
    "Product Title",
    "Location",
    "Quantity",
    "Cost Value",
    "Retail Value",
    "Age"
  ]

  const smallHeadings = [
    "Product Code",
    "Product Title",
  ]


  const insideTableResponsive = (data, wrapperDiv) => {
    let row = []

    row.push(
      <ul className="dtr-details custom-dtr-details">
        <li>
          <span className="dtr-title">Profile</span>
          <span className="dtr-data">
            <img className="product-profile" src={data.profile} alt="" />
          </span>
        </li>
      </ul>
    )
    for (const [index, value] of data.location.entries()) {
      row.push(
        <ul className="dtr-details custom-dtr-details" key={index}>
          <li>
            <span className="dtr-title">Location</span>
            <span className="dtr-data">{value.location_name}</span>
          </li>
          <li>
            <span className="dtr-title">Quantity</span>
            <span className="dtr-data">{value.qty}</span>
          </li>
          <li>
            <span className="dtr-title">Cost Value</span>
            <span className="dtr-data">{value.cost_value}</span>
          </li>
          <li>
            <span className="dtr-title">Retail Value</span>
            <span className="dtr-data">{value.retail_value}</span>
          </li>
          <li>
            <span className="dtr-title">Age</span>
            <span className="dtr-data">{value.age}</span>
          </li>
        </ul>
      )
    }

    if (data.location.length > 1) {
      if (data.location.reduce(sumQty)) {
        row.push(
          <ul className="dtr-details custom-dtr-details">
            <li>
              <span className="dtr-title">Location</span>
              <span className="dtr-data">Total</span>
            </li>
            <li>
              <span className="dtr-title">Quantity</span>
              <span className="dtr-data">{data.location.reduce(sumQty)}</span>
            </li>
            <li>
              <span className="dtr-title">Cost Value</span>
              <span className="dtr-data">{data.location.reduce(sumCostVal)}</span>
            </li>
            <li>
              <span className="dtr-title">Retail Value</span>
              <span className="dtr-data">{data.location.reduce(sumRetailVal)}</span>
            </li>
          </ul>
        )
      }
    }


    // return row;
    ReactDOM.render(<div>{row}</div>, wrapperDiv);

  }

  let parentTableOptions = {
    searching: false,
    paging: false,
    info: false,
    data: products,
    pageLength: 5,
    columnDefs: [
      {
        targets: 0,
        width: '',
        className: 'details-control',
        orderable: false,
      },
    ],
    columns: [
      {
        "className": 'details-control',
        "orderable": false,
        "data": null,
        "defaultContent": ''
      },
      { "data": "profile" },
      { "data": "product_code", "className": 'pCode' },
      { "data": "product_title", "className": 'pCode' },
      { "data": null },
      { "data": null },
      { "data": null },
      { "data": null },
      { "data": null },
    ],
    "order": [[1, 'asc']],
    createdRow: function (row, data, index) {
      if (data.location.length > 1) {
        const locationCol = $(row).find("td:nth-child(5)")
        const qtyCol = $(row).find("td:nth-child(6)")
        const costCol = $(row).find("td:nth-child(7)")
        const retailCol = $(row).find("td:nth-child(8)")
        const ageCol = $(row).find("td:nth-child(9)")

        const location = 'Multiple';
        const age = `<span class="expand-table">Expand</span>`;
        const qty = data.location.reduce(sumQty)
        const cost = data.location.reduce(sumCostVal)
        const retail = data.location.reduce(sumRetailVal)

        locationCol.text(location)
        qtyCol.text(qty)
        costCol.text(cost)
        retailCol.text(retail)
        ageCol.html(age)

      } else {
        const locationCol = $(row).find("td:nth-child(5)")
        const qtyCol = $(row).find("td:nth-child(6)")
        const costCol = $(row).find("td:nth-child(7)")
        const retailCol = $(row).find("td:nth-child(8)")
        const ageCol = $(row).find("td:nth-child(9)")

        locationCol.text(data.location[0].location_name)
        qtyCol.text(data.location[0].qty)
        costCol.text(data.location[0].cost_value)
        retailCol.text(data.location[0].retail_value)
        ageCol.text(data.location[0].age)
      }
    },
    rowCallback: function (row, data, index) {
      //console.log('rowCallback');
    }
  }

  if (width <= 425) {
    parentTableOptions.columns = [
      { "data": 'product_id' },
      { "data": "product_code" },
      { "data": "product_title" }
    ]
  } else {
    parentTableOptions.columnDefs.push(
      {
        targets: 1,
        width: '',
        data: 'img',
        render: function (url, type, full) {
          console.log({ url, full })
          return `<img class="product-profile" src="${url}" />`;
        }
      }
    )
  }

  let displayedHeader = width <= 425 ? smallHeadings : headings;

  for (const [index, value] of displayedHeader.entries()) {
    theads.push(<th key={index}>{value}</th>)
  }

  useEffect(() => {
    var table = $('.app-data-table').DataTable(parentTableOptions);

    const expand = document.querySelector('.expand-table');
    if (expand) {
      expand.addEventListener('click', function () {
        const plusIcon = document.querySelector('.app-data-table tbody td.details-control');
        plusIcon.click();
      })
    }

    const tablebody = document.querySelectorAll('.app-data-table tbody td.details-control');
    tablebody.forEach((e, indx) => {
      e.addEventListener('click', function () {
        const tr = $(this).closest('tr');
        const row = table.row(tr);

        if (row.child.isShown()) {
          row.child.hide();
          tr.removeClass('shown');
        } else {
          row.child(`<div class="toggle-wrapper-${indx}"></div>`).show();
          const wrapperDiv = document.querySelector(`.toggle-wrapper-${indx}`)

          if (width <= 425) {
            // ReactDOM.render(<div>{insideTableResponsive(row.data())}</div>, wrapperDiv);
            insideTableResponsive(row.data(), wrapperDiv)
          } else {
            row.child(
              `<table class="inside-table-${indx} table display no-wrap" width="100%">
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>QTY</th>
                    <th>Cost Value</th>
                    <th>Retail Value</th>
                    <th>Age</th>
                  </tr>
                </thead>
              </table>
             `
            ).show()

            $(`.inside-table-${indx}`).DataTable({
              data: row.data().location,
              searching: false,
              paging: false,
              info: false,
              destroy: true,
              responsive: true,
              columnDefs: [
                { responsivePriority: 1, targets: 0 }
              ],
              columns: [
                { "data": "location_name" },
                { "data": "qty" },
                { "data": "cost_value" },
                { "data": "retail_value" },
                { "data": "age" }
              ]
            })
          }
          tr.addClass('shown');
        }
      })
    });
  }, [])


  return (
    <table className="app-data-table table table-hover display mt-20" width="100%">
      <thead>
        <tr>
          <th></th>
          {theads}
        </tr>
      </thead>
    </table>
  )
}

export default ProductInventoryTable
