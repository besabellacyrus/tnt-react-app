import React, { PureComponent } from 'react'
import $ from 'jquery';
import Search from '../components/Search';

const $DataTable = require('datatables.net-responsive');

let scripts = []
export default class Products extends PureComponent {
  componentDidMount () {
    $(this.refs.main).DataTable({
      "fnDrawCallback": function (oSettings) {
      },
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
                    <table ref="main" id="example" className="table table-hover display  pb-30">
                      <thead>
                        <tr>
                          <th>Profile</th>
                          <th>Product Code</th>
                          <th>Product Title</th>
                          <th>Price A</th>
                          <th>Price B</th>
                          <th>Price C</th>
                          <th>Retail Price</th>
                          <th>Product Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><img src="img/user1.png" /></td>
                          <td>IA68576</td>
                          <td>Ironman Mark 43 1:4 Scale</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>

                          <td><img src="img/user1.png" /></td>
                          <td>IA68576</td>
                          <td>Ironman Mark 43 1:4 Scale</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>

                          <td><img src="img/user1.png" /></td>
                          <td>IA68576</td>
                          <td>Ironman Mark 43 1:4 Scale</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>
                          <td><img src="img/user1.png" /></td>
                          <td>IA68576</td>
                          <td>Ironman Mark 43 1:4 Scale</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>

                          <td><img src="img/user1.png" /></td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>

                          <td><img src="img/user1.png" /></td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>

                          <td><img src="img/user1.png" /></td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>

                          <td><img src="img/user1.png" /></td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>

                          <td><img src="img/user1.png" /></td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>

                          <td><img src="img/user1.png" /></td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>

                          <td><img src="img/user1.png" /></td>
                          <td>IA44113</td>
                          <td>Legacy of Cybertron Thundercracker</td>
                          <td>1,800.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                          <td>2,480.00</td>
                          <td>10,000.00</td>
                        </tr>
                        <tr>

                          <td><img src="img/user1.png" /></td>
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
