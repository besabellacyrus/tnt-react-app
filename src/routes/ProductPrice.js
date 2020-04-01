import React from 'react'
import Card from '../components/Card';

const ProductPrice = () => {
  return (
    <React.Fragment>
      <div className="panel-group accordion-struct accordion-wrapper" id="accordion_1" role="tablist" aria-multiselectable="true">
        <Card>
          <div className="panel panel-default">
            <div className="panel-heading activestate" role="tab" id="heading_1">
              <a role="button" data-toggle="collapse" data-parent="#accordion_1" href="#collapse_1" aria-expanded="true">Product Price Member 1</a>
            </div>
            <div id="collapse_1" className="panel-collapse collapse in" role="tabpanel">
              <div className="row">
                <div className="col-sm-12">
                  <form action="#" className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-2 text-right">+ For Members</label>
                      <div className="col-md-10">
                        <select className="form-control">
                          <option>Default Member</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-2 text-right">Price A</label>
                      <div className="col-md-10">
                        <select className="form-control">
                          <option>Pc 1</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-xs-12 col-md-2">Retail Price</label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="Retail Price" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div>
                      <label className="control-label col-xs-12 col-md-2 ">Pre Order Prices</label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="Pre Order Prices" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div>
                    </div>

                    {/* /retail price */}
                    {/* whole sale */}

                    <div className="form-group">
                      <label className="control-label col-xs-12 col-md-2">Whole Sale</label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="Whole Sale" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div>
                      <label className="control-label col-xs-12 col-md-2 ">Special Offer</label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="Special Offer" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div>
                    </div>

                    {/* /whole sale */}

                    <div className="form-group">
                      <label className="control-label col-xs-12 col-md-2">Deposit Price</label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="Deposit Price" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div>
                      {/* <label className="control-label col-xs-12 col-md-2"></label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div> */}
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">Ship Via</label>
                      <div className="col-md-10">
                        <select className="form-control">
                          <option>EMS</option>
                        </select>
                      </div>
                    </div>
                  </form>
                  <hr></hr>
                  <button className="btn app-btn app-btn-default">Add Member Price</button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="heading_2">
              <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion_1" href="#collapse_2" aria-expanded="false">Product Price Member 2</a>
            </div>
            <div id="collapse_2" className="panel-collapse collapse" role="tabpanel">
              <div className="row">
                <div className="col-sm-12">
                  <form action="#" className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-md-2 text-right">+ For Members</label>
                      <div className="col-md-10">
                        <select className="form-control">
                          <option>Default Member</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-md-2 text-right">Price A</label>
                      <div className="col-md-10">
                        <select className="form-control">
                          <option>Pc 1</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-xs-12 col-md-2">Retail Price</label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="Retail Price" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div>
                      <label className="control-label col-xs-12 col-md-2 ">Pre Order Prices</label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="Pre Order Prices" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div>
                    </div>

                    {/* /retail price */}
                    {/* whole sale */}

                    <div className="form-group">
                      <label className="control-label col-xs-12 col-md-2">Whole Sale</label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="Whole Sale" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div>
                      <label className="control-label col-xs-12 col-md-2 ">Special Offer</label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="Special Offer" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div>
                    </div>

                    {/* /whole sale */}

                    <div className="form-group">
                      <label className="control-label col-xs-12 col-md-2">Deposit Price</label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="Deposit Price" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div>
                      {/* <label className="control-label col-xs-12 col-md-2"></label>
                      <div className="col-xs-9 col-md-3">
                        <div className="input-group app-input-group">
                          <input type="text" id="example-input2-group3" name="example-input2-group3" className="form-control" placeholder="" />
                          <div className="input-group-btn">
                            <button type="button" className="btn  app-btn-default dropdown-toggle" data-toggle="dropdown">USD <span className="caret"></span></button>
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
                      <div className="col-xs-3 col-md-1">
                        <span className="add-btn"><i className="fa fa-plus"></i></span>
                      </div> */}
                    </div>

                    <div className="form-group">
                      <label className="control-label col-md-2">Ship Via</label>
                      <div className="col-md-10">
                        <select className="form-control">
                          <option>EMS</option>
                        </select>
                      </div>
                    </div>
                  </form>
                  <hr></hr>
                  <button className="btn app-btn app-btn-default">Add Member Price</button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default ProductPrice
