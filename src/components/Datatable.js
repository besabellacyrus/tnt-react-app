import React, { useEffect } from 'react'
import $ from 'jquery';
require('datatables.net-responsive');

const Datatable = (props) => {

  // { responsivePriority: 1, targets: 0 },
  //         { responsivePriority: 10001, targets: 1 },
  //         { responsivePriority: 1, targets: 3 },

  // console.log({ dddd: sample })

  const mainConfig = {
    responsive: true,
    dom: `<'row'<'col-sm-12'tr>>
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



  useEffect(() => {
    if (props.config) {
      mainConfig.columnDefs.push(...props.config)
    }
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

  }, [])

  return (
    <table className="app-data-table table table-striped table-bordered table-hover table-checkable mt-20" id="kt_table_1" width="100%">
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
