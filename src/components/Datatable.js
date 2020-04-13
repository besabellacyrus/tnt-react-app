import React, { useEffect } from 'react'
import $ from 'jquery';
require('datatables.net-responsive');

const Datatable = (props) => {

  const regEx = true;
  const smart = true;


  // const filterGlobal = () => {
  //   $('.app-data-table').DataTable().search(
  //     $('#global_filter').val(),
  //     regEx,
  //     smart
  //   ).draw();
  // }


  const createFilter = (table) => {

    let checkedboxes = document.querySelectorAll('#checkbox-ul input[type=checkbox]');

    // let selectedBoxes = [];

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


    // return input;
  }

  // const filterColumn = (i) => {
  //   $('.app-data-table').DataTable().columns().search(
  //     $('.search-datatable').val(),
  //     regEx,
  //     smart
  //   ).draw();
  // }

  const mainConfig = {
    responsive: true,
    dom: `<'row'<'col-sm-12 data-table-wrapper'tr>>
        <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,
    lengthMenu: [5, 10, 25, 50],
    pageLength: 10,
    order: [[1, 'desc']],
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
    ]
  }

  if (props.config) {
    mainConfig.columnDefs.push(...props.config)
  }

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
        }
        else {
          $(this).prop('checked', false);
          $(this).closest('tr').removeClass('active');
        }
      });
    });
    table.on('change', 'tbody tr .kt-checkbox', function () {
      $(this).parents('tr').toggleClass('active');
    });

    createFilter($('.app-data-table').DataTable())
    // $('input.search-datatable').on('keyup click', function () {
    //   // filterColumn(1);
    // });
    return () => {
      $('.data-table-wrapper')
        .find('table')
        .DataTable()
        .destroy(true);
    }
  }, [])

  return (
    <table className="app-data-table table table-hover display mt-20" width="100%">
      <thead>
        <tr>
          <th><input type="checkbox" className="kt-group-checkable" /></th>
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
