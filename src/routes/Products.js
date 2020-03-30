import React, { PureComponent } from 'react'
import $ from 'jquery';
import Search from '../components/Search';
import Card from '../components/Card';
import AppDataTable from '../components/AppDataTable';
import products from '../test/products.json';
const $DataTable = require('datatables.net-responsive');

let scripts = []

const config = {
  headings: [
    'Profile',
    'Product Code',
    'Product Title',
    'Price A',
    'Price B',
    'Price C',
    'Retail Price',
    'Product Cost',
  ],
  data: products
}

export default class Products extends PureComponent {
  componentDidMount () {
    // $(this.refs.main).DataTable({
    //   "fnDrawCallback": function (oSettings) {
    //   },
    //   bFilter: false,
    //   bInfo: false,
    //   responsive: true,
    //   columnDefs: [{
    //     orderable: false,
    //     className: 'select-checkbox',
    //     targets: 0
    //   }],
    //   select: {
    //     style: 'os',
    //     selector: 'td:first-child'
    //   },
    //   order: [[1, 'asc']]
    // });

    // $('#product-table tbody').on('click', 'tr', function () {
    //   console.log('clicked')
    // })
  }

  render () {
    return (
      <Card title="Products" subTitle="Product List">
        {/* will make this a component later */}
        <div className="table-wrap tablesaw-overflow">
          <div id="app-table-header-btns">
            <div className="pull-right">
              <button className="btn btn-primary">Add New</button>
              <button className="btn btn-warning">Duplicate</button>
              <button className="btn btn-darkblue">Delete</button>
            </div>
            <div className="clearfix"></div>
            <div className="pull-right">
              <button className="btn btn-default">Copy</button>
              <button className="btn btn-default">CSV</button>
              <button className="btn btn-default">Excel</button>
              <button className="btn btn-default">PDF</button>
              <button className="btn btn-default">Print</button>
            </div>
          </div>
          <Search />
          <AppDataTable config={config} />
        </div>
      </Card >
    )
  }
}
