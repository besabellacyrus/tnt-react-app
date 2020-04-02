import React, { useEffect } from 'react'
import $ from 'jquery';
require('datatables.net-responsive');

const Datatable = (props) => {
  useEffect(() => {
    const table = $('.app-data-table');
    table.DataTable(
      {
        responsive: true,
        // // DOM Layout settings
        dom: `<'row'<'col-sm-12'tr>>
        <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

        lengthMenu: [5, 10, 25, 50],

        pageLength: 10,

        // language: {
        //   'lengthMenu': 'Display _MENU_',
        // },

        // Order settings
        order: [[1, 'desc']],

        // headerCallback: function (thead, data, start, end, display) {
        //   thead.getElementsByTagName('th')[0].innerHTML = `
        //               <label class="kt-checkbox kt-checkbox--single kt-checkbox--solid">
        //                   <input type="checkbox" value="" class="kt-group-checkable">
        //                   <span></span>
        //               </label>`;
        // },
        // columns: [
        //   { responsivePriority: 6 },
        //   { responsivePriority: 6 },
        //   { responsivePriority: 5 },
        //   { responsivePriority: 6 },
        //   { responsivePriority: 5 },
        //   { responsivePriority: 4 },
        //   { responsivePriority: 3 },
        //   { responsivePriority: 2 },
        //   { responsivePriority: 1 }
        // ],
        columnDefs: [
          { responsivePriority: 1, targets: 0 },
          { responsivePriority: 10001, targets: 1 },
          { responsivePriority: 1, targets: 3 },
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
          // {
          //   targets: -1,
          //   title: 'Actions',
          //   orderable: false,
          //   render: function (data, type, full, meta) {
          //     return `
          //                 <span class="dropdown">
          //                     <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">
          //                       <i class="la la-ellipsis-h"></i>
          //                     </a>
          //                     <div class="dropdown-menu dropdown-menu-right">
          //                         <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>
          //                         <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>
          //                         <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>
          //                     </div>
          //                 </span>
          //                 <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">
          //                   <i class="la la-edit"></i>
          //                 </a>`;
          //   },
          // },
          // {
          //   targets: 8,
          //   render: function (data, type, full, meta) {
          //     var status = {
          //       1: { 'title': 'Pending', 'class': 'kt-badge--brand' },
          //       2: { 'title': 'Delivered', 'class': ' kt-badge--metal' },
          //       3: { 'title': 'Canceled', 'class': ' kt-badge--primary' },
          //       4: { 'title': 'Success', 'class': ' kt-badge--success' },
          //       5: { 'title': 'Info', 'class': ' kt-badge--info' },
          //       6: { 'title': 'Danger', 'class': ' kt-badge--danger' },
          //       7: { 'title': 'Warning', 'class': ' kt-badge--warning' },
          //     };
          //     if (typeof status[data] === 'undefined') {
          //       return data;
          //     }
          //     return '<span class="kt-badge ' + status[data].class + ' kt-badge--inline kt-badge--pill">' + status[data].title + '</span>';
          //   },
          // },
          // {
          //   targets: 9,
          //   render: function (data, type, full, meta) {
          //     var status = {
          //       1: { 'title': 'Online', 'state': 'danger' },
          //       2: { 'title': 'Retail', 'state': 'primary' },
          //       3: { 'title': 'Direct', 'state': 'accent' },
          //     };
          //     if (typeof status[data] === 'undefined') {
          //       return data;
          //     }
          //     return '<span class="kt-badge kt-badge--' + status[data].state + ' kt-badge--dot"></span>&nbsp;' +
          //       '<span class="kt-font-bold kt-font-' + status[data].state + '">' + status[data].title + '</span>';
          //   },
          // },
        ],
      }

    );

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
    // <table className="app-data-table table display nowrap table-hover pb-30" width="100%">
    <table class="app-data-table table table-striped table-bordered table-hover table-checkable" id="kt_table_1" width="100%">
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
