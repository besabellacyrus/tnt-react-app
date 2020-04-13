import React, { useEffect } from 'react'
import ProductMedia from './ProductMedia';
import ProductPrice from './ProductPrice';
import ProductSupplier from './ProductSupplier';
import '../vendors/bower_components/switchery/dist/switchery.js';
import ProductNav from '../components/ProductNav';
import ProductForm from '../components/ProductForm';

const Product = (props) => {
  const { match: { params } } = props;
  return (
    <React.Fragment>
      <ProductNav />
      <div className="mt-20">
        <div className="tab-content" id="myTabContent_6">
          <div id="product_info" className="tab-pane fade active in" role="tabpanel">
            <div className="row">
              <div className="col-sm-12">
                <div className="panel panel-default card-view">
                  <div className="panel-heading">
                    <div className="pull-left">
                      <h6 className="panel-title txt-dark">Product Information</h6>
                    </div>
                    <div className="languages">
                      <a className="language-btn language-btn-active">English</a>
                      <a className="language-btn ">Chinese</a>
                    </div>
                    <div className="clearfix"></div>
                    <hr></hr>
                  </div>
                  <div className="panel-wrapper collapse in">
                    <div className="panel-body">
                      <ProductForm />
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-wrap">
                            <h6>Pre Order:</h6>
                            <form action="#" className="form-horizontal">
                              <div className="form-group">
                                <label className="control-label col-md-3">Start Date</label>
                                <div className="col-md-9">
                                  <div className='input-group date' id='datetimepicker1'>
                                    <input type='text' className="form-control" />
                                    <span className="input-group-addon">
                                      <span className="fa fa-calendar"></span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="control-label col-md-3">End Date</label>
                                <div className="col-md-9">
                                  <div className='input-group date' id='datetimepicker5'>
                                    <input type='text' className="form-control" />
                                    <span className="input-group-addon">
                                      <span className="fa fa-calendar"></span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="control-label col-md-3">Release Date</label>
                                <div className="col-md-9">
                                  <div className='input-group date' id='datetimepicker6'>
                                    <input type='text' className="form-control" />
                                    <span className="input-group-addon">
                                      <span className="fa fa-calendar"></span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        {/*  */}
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <h6>Special Offer:</h6>

                            <form action="#" className="form-horizontal">
                              <div className="form-group">
                                <label className="control-label col-md-3">Start Date</label>
                                <div className="col-md-9">
                                  <div className='input-group date' id='datetimepicker7'>
                                    <input type='text' className="form-control" />
                                    <span className="input-group-addon">
                                      <span className="fa fa-calendar"></span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="control-label col-md-3">End Date</label>
                                <div className="col-md-9">
                                  <div className='input-group date' id='datetimepicker8'>
                                    <input type='text' className="form-control" />
                                    <span className="input-group-addon">
                                      <span className="fa fa-calendar"></span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-wrap">
                            <form action="#" className="form-horizontal">
                              <div className="form-group">
                                <label className="control-label col-md-3">Date Created</label>
                                <div className="col-md-9">
                                  <div className='input-group date' id='datetimepicker9'>
                                    <input type='text' className="form-control" />
                                    <span className="input-group-addon">
                                      <span className="fa fa-calendar"></span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="control-label col-md-3">Last Update</label>
                                <div className="col-md-9">
                                  <div className='input-group date' id='datetimepicker0'>
                                    <input type='text' className="form-control" />
                                    <span className="input-group-addon">
                                      <span className="fa fa-calendar"></span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="product_media" className="tab-pane fade in" role="tabpanel">
            <ProductMedia />
          </div>
          <div id="product_price" className="tab-pane fade in" role="tabpanel">
            <ProductPrice />
          </div>
          <div id="product_supplier" className="tab-pane fade in" role="tabpanel">
            <ProductSupplier />
          </div>
        </div>
        <div className="pull-right">
          <button className="btn app-btn btn-primary">Preview</button>
          <button form='first-part-form' type="submit" className="btn app-btn btn-primary">Save</button>
          <button className="btn app-btn btn-danger">Cancel</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Product
