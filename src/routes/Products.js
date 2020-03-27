import React, { PureComponent } from 'react'
import $ from 'jquery';
$.DataTable = require('datatables.net');

const data = [
  {
    profile: 'img',
    product_title: 'Legacy of Cybertron Thundercracker',
    product_code: 'IA44113',
    price_a: '139.00',
    price_b: '1,000.00',
    price_c: '1,000.00',
    retail_price: '1,000.00',
    product_cost: '10,000.00',
  },
  {
    profile: 'img',
    product_title: 'Ironman Mark 43 1:4 Scale',
    product_code: 'IA68575',
    price_a: '139.00',
    price_b: '1,000.00',
    price_c: '1,000.00',
    retail_price: '1,000.00',
    product_cost: '10,000.00',
  },
  {
    profile: 'img',
    product_title: 'Megadeth',
    product_code: 'NEC33670',
    price_a: '139.00',
    price_b: '1,000.00',
    price_c: '1,000.00',
    retail_price: '1,000.00',
    product_cost: '10,000.00',
  },
]

export default class Products extends PureComponent {
  componentDidMount () {
    $(this.refs.main).DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ],
    });
  }
  componentWillUnmount () {
    $('.table-responsive')
      .find('table')
      .DataTable()
      .destroy(true);
  }

  render () {
    return (
      <React.Fragment>
        <div className="app-module-title">
          <h6 className="panel-title txt-dark">Products</h6>
        </div>
        <div className="row">
          <div class="col-sm-12">
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
              <div class="panel-wrapper collapse in">
                <div class="panel-body">
                  <div class="table-wrap">
                    <div class="table-responsive">
                      <table ref="main" id="example" class="table table-hover display pb-30" >
                        <thead>
                          <tr>
                            <th></th>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
                            <td></td>
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
        </div>
      </React.Fragment>
    )
  }
}
