import React, { useEffect, useState } from 'react'
import Helper from '../helper';
import { apiUrl } from '../api';
import $ from 'jquery'
// require('datatables.net-responsive');
$.DataTable = require('datatables.net');

const DynamicDatatable = (props) => {
  const [product, setProduct] = useState([]);

  const mainConfig = {
    searching: true,
    // paging: false,
    dom: `<'row'<'col-sm-12 data-table-wrapper'tr>>
        <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
    info: false,
    lengthMenu: [5, 10, 25, 50],
    pageLength: 10,
    // order: [[1, 'desc']],
    responsive: true,
    serverSide: true,
    ajax: {
      url: `${apiUrl}/api/product`,
      type: 'GET',
    },
    columnDefs: [
      {
        targets: 0,
        width: '',
        className: 'dt-right',
        orderable: false,
        render: function (data, type, full, meta) {
          return `
          <label class="kt-checkbox kt-checkbox--single kt-checkbox--solid">
              <input type="checkbox" value="" class="kt-checkable">
              <span></span>
          </label>`;
        },
      },
      {
        'targets': 2,
        'createdCell': function (td, cellData, rowData, row, col) {
          $(td).attr('class', 'pCode');
        }
      },
      {
        'targets': 3,
        'createdCell': function (td, cellData, rowData, row, col) {
          $(td).attr('class', 'pCode');
        }
      },
      {
        'targets': 4,
        'createdCell': function (td, cellData, rowData, row, col) {
          $(td).attr('class', 'pCode');
        }
      },
      {
        'targets': 5,
        'createdCell': function (td, cellData, rowData, row, col) {
          $(td).attr('class', 'pCode');
        }
      },
      {
        'targets': 6,
        'createdCell': function (td, cellData, rowData, row, col) {
          $(td).attr('class', 'pCode');
        }
      },
      {
        'targets': 7,
        'createdCell': function (td, cellData, rowData, row, col) {
          $(td).attr('class', 'pCode');
        }
      },
      {
        'targets': 8,
        'createdCell': function (td, cellData, rowData, row, col) {
          $(td).attr('class', 'pCode');
        }
      },
      { responsivePriority: 1, targets: 0 },
      { responsivePriority: 10001, targets: 1 },
      { responsivePriority: 1, targets: 3 }
    ],
    columns: [
      {
        "className": 'details-control',
        "orderable": false,
        "defaultContent": ''
      },
      {
        "className": '',
        "orderable": false,
        "data": "profile",
        "defaultContent": ''
      },
      {
        "className": '',
        "orderable": true,
        "data": "product_code",
        "defaultContent": ''
      },
      {
        "className": '',
        "orderable": true,
        "data": "product_title",
        "defaultContent": ''
      },
      {
        "className": '',
        "orderable": true,
        "data": null,
        "defaultContent": '0.00'
      },
      {
        "className": '',
        "orderable": true,
        "data": null,
        "defaultContent": '0.00'
      },
      {
        "className": '',
        "orderable": true,
        "data": null,
        "defaultContent": '0.00'
      },
      {
        "className": '',
        "orderable": true,
        "data": null,
        "defaultContent": '0.00'
      },
      {
        "className": '',
        "orderable": true,
        "data": null,
        "defaultContent": '0.00'
      },
    ]
  }

  const createFilter = (table) => {
    let checkedboxes = document.querySelectorAll('#checkbox-ul input[type=checkbox]');
    [...checkedboxes].forEach((e) => {
      let cols = []
      if (e.checked) {
        cols.push(e.value)
      }
      e.addEventListener('click', (w) => {
      })
    })

    var input = $('input.search-datatable').on("keyup", function () {
      table.draw();
    });

    const columns = [2, 3]
    $.fn.dataTable.ext.search.push(function (
      settings,
      searchData,
      index,
      rowData,
      counter
    ) {
      var val = input.val().toLowerCase();

      for (var i = 0, ien = columns.length; i < ien; i++) {
        if (searchData[columns[i]].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  useEffect(() => {
    Helper.initializeHoverCopy('.pCode');
  })

  useEffect(() => {
    const table = $('.app-data-table');
    table.DataTable(mainConfig);

    table.on('change', '.kt-group-checkable', function () {
      var set = $(this).closest('table').find('td:first-child .kt-checkable');
      var checked = $(this).is(':checked');

      $(set).each(function () {
        if (checked) {
          $(this).prop('checked', true);
          $(this).closest('tr').addClass('active');
        } else {
          $(this).prop('checked', false);
          $(this).closest('tr').removeClass('active');
        }
      });
    });
    table.on('change', 'tbody tr .kt-checkbox', function () {
      $(this).parents('tr').toggleClass('active');
    });

    createFilter($('.app-data-table').DataTable())

    $('.app-data-table').on('click', 'tbody tr', function() {

      //get textContent of the TD
      console.log('TD cell textContent : ', this)

      //get the value of the TD using the API
    })

    return () => {
      // cleaning
      $('.data-table-wrapper')
        .find('table')
        .DataTable()
        .destroy(true);
    }
  }, [])

  const handleChange = () => {
    console.log('changing')
  }

  return (
    <table className="app-data-table table table-hover display mt-20" width="100%">
      <thead>
        <tr>
          <th><input type="checkbox" className="kt-group-checkable" /></th>
          {props.headings}
        </tr>
      </thead>
    </table>
  )
}

export default DynamicDatatable
