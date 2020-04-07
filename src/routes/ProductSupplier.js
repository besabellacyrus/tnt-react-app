import React from 'react'
import Card from '../components/Card'

const ProductSupplier = () => {
  return (
    <React.Fragment>
      <div className="panel-group accordion-struct accordion-wrapper" id="accordion_1" role="tablist" aria-multiselectable="true">
        <Card>
          <div className="panel panel-default">
            <div className="panel-heading activestate" role="tab" id="heading_1">
              <a role="button" data-toggle="collapse" data-parent="#accordion_1" href="#collapse_1" aria-expanded="true">Product Supplier 1</a>
            </div>
            <div id="collapse_1" className="panel-collapse collapse in" role="tabpanel">
              <div className="row">
                <form action="#" className="form-horizontal">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label col-md-3 text-right">Supplier</label>
                      <div className="col-md-9">
                        <select className="form-control">
                          <option>SUP-CN-NC</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label col-md-3 text-right">Receiving Warehouse</label>
                      <div className="col-md-9">
                        <select className="form-control">
                          <option>China Warehouse</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label col-md-3 text-right">+ Offered Cost</label>
                      <div className="col-md-9">
                        <div className="input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="0.00" />
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li><a href="javascript:void(0)">USD</a></li>
                              <li><a href="javascript:void(0)">AUD</a></li>
                              <li><a href="javascript:void(0)">PHP</a></li>
                              <li><a href="javascript:void(0)">JPY</a></li>
                              <li><a href="javascript:void(0)">Add New Currency</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label col-md-3">PO Submission Dateline</label>
                      <div className="col-md-9">
                        <div className='input-group date' id='datetimepicker1'>
                          <input type='text' className="form-control" />
                          <span className="input-group-addon">
                            <span className="fa fa-calendar"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* /row */}
              {/* <hr></hr> */}
              {/* <button className="btn app-btn btn-primary free-width">Add Supplier</button>
              <button className="btn app-btn btn-darkblue free-width">Delete Supplier</button> */}
            </div>
          </div>
        </Card>
        <Card>
          <div className="panel panel-default">
            <div className="panel-heading activestate" role="tab" id="heading_1">
              <a role="button" data-toggle="collapse" data-parent="#accordion_1" href="#collapse_1" aria-expanded="true">Product Supplier 2</a>
            </div>
            <div id="collapse_1" className="panel-collapse collapse in" role="tabpanel">
              <div className="row">
                <form action="#" className="form-horizontal">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label col-md-3 text-right">Supplier</label>
                      <div className="col-md-9">
                        <select className="form-control">
                          <option>SUP-CN-NC</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label col-md-3 text-right">Receiving Warehouse</label>
                      <div className="col-md-9">
                        <select className="form-control">
                          <option>China Warehouse</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label col-md-3 text-right">+ Offered Cost</label>
                      <div className="col-md-9">
                        <div className="input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="0.00" />
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
                            <ul className="dropdown-menu dropdown-menu-right">
                              <li><a href="javascript:void(0)">USD</a></li>
                              <li><a href="javascript:void(0)">AUD</a></li>
                              <li><a href="javascript:void(0)">PHP</a></li>
                              <li><a href="javascript:void(0)">JPY</a></li>
                              <li><a href="javascript:void(0)">Add New Currency</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label col-md-3">PO Submission Dateline</label>
                      <div className="col-md-9">
                        <div className='input-group date' id='datetimepicker1'>
                          <input type='text' className="form-control" />
                          <span className="input-group-addon">
                            <span className="fa fa-calendar"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* /row */}
              {/* <hr></hr> */}
              {/* <button className="btn app-btn btn-primary free-width">Add Supplier</button>
              <button className="btn app-btn btn-darkblue free-width">Delete Supplier</button> */}
            </div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default ProductSupplier
