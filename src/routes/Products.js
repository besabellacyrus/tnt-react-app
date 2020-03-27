import React, { PureComponent } from 'react'
import $ from 'jquery';
import 'tablesaw/dist/tablesaw.jquery';
import Tablesaw from 'tablesaw/dist/tablesaw.jquery';
const $DataTable = require('datatables.net')


// $.DataTable = require('datatables.net');

// const data = [
//   {
//     profile: 'img',
//     product_title: 'Legacy of Cybertron Thundercracker',
//     product_code: 'IA44113',
//     price_a: '139.00',
//     price_b: '1,000.00',
//     price_c: '1,000.00',
//     retail_price: '1,000.00',
//     product_cost: '10,000.00',
//   },
//   {
//     profile: 'img',
//     product_title: 'Ironman Mark 43 1:4 Scale',
//     product_code: 'IA68575',
//     price_a: '139.00',
//     price_b: '1,000.00',
//     price_c: '1,000.00',
//     retail_price: '1,000.00',
//     product_cost: '10,000.00',
//   },
//   {
//     profile: 'img',
//     product_title: 'Megadeth',
//     product_code: 'NEC33670',
//     price_a: '139.00',
//     price_b: '1,000.00',
//     price_c: '1,000.00',
//     retail_price: '1,000.00',
//     product_cost: '10,000.00',
//   },
// ]

let scripts = []
export default class Products extends PureComponent {
  componentDidMount () {
    Tablesaw.init();
    $('#example').$DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    });
  }

  scriptLoaded () {
    if (scripts.length < 2) {
      const script = document.createElement("script");
      script.src = "bower/filament-tablesaw/dist/tablesaw-init.js";
      script.async = true;
      document.body.appendChild(script);
      scripts.push(script);
    }
    document.dispatchEvent(new Event("enhance.tablesaw"));

  }
  componentWillUnmount () {
    // $('.table-responsive')
    //   .find('table')
    //   .DataTable()
    //   .destroy(true);
    // console.log(scripts)
    // if (scripts) {
    //   scripts.forEach(script => {
    //     if (script.parentNode !== null) {
    //       script.parentNode.removeChild(script);
    //     }
    //   })
    // }
  }

  render () {
    return (
      <React.Fragment>
        <div className="app-module-title">
          <h6 className="panel-title txt-dark">Products</h6>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="panel panel-default card-view">
              <div className="panel-heading">
                <div className="pull-left">
                  <h6 className="panel-title txt-dark">Product List</h6>
                </div>
                {/* <div className="clearfix"></div> */}
                {/* <div className="app-search">
                  <label>Search:</label>
                  <input type="text" />
                </div> */}
                <div className="app-product-action-btns">
                  <button className="btn btn-primary">Add New</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
                <br />
                {/* <div className="app-product-special-action-btns">
                  <button className="btn">Copy</button>
                  <button className="btn">CSV</button>
                  <button className="btn">Excel</button>
                  <button className="btn">PDF</button>
                  <button className="btn">Print</button>
                </div> */}
              </div>
              <div className="panel-wrapper collapse in">
                <div className="panel-body">
                  <div className="table-wrap tablesaw-overflow">
                    <table id="example" className="tablesaw table-striped table-hover table-bordered table"
                      data-tablesaw-sortable data-tablesaw-mode="columntoggle">
                      <thead>
                        <tr>
                          <th data-tablesaw-priority="6">Profile</th>
                          <th data-tablesaw-sortable-col data-tablesaw-priority="1">Product Code</th>
                          <th data-tablesaw-sortable-col data-tablesaw-priority="1">Product Title</th>
                          <th data-tablesaw-sortable-col data-tablesaw-priority="3">Price A</th>
                          <th data-tablesaw-sortable-col data-tablesaw-priority="3">Price B</th>
                          <th data-tablesaw-sortable-col data-tablesaw-priority="3">Price C</th>
                          <th data-tablesaw-sortable-col data-tablesaw-priority="4">Retail Price</th>
                          <th data-tablesaw-sortable-col data-tablesaw-priority="5">Product Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td>img</td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
