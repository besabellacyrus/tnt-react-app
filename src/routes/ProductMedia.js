import React from 'react'
import Card from '../components/Card';
import SlideShow from '../components/SlideShow';
import Switch from 'react-switchery';

const ProductMedia = () => {
  return (
    <Card subTitle="Product Media">
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="product-images">
              <label className="col-sm-3 text-right">Product Images</label>
              <div className="col-sm-9">
                <SlideShow />
                <button className="btn app-btn-default btn-icon left-icon mb-30"> <i className="fa fa-paperclip"></i> <span>Media Upload</span></button>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row mb-30">
            <div className="product-images">
              <label className="col-sm-3 text-right">Thumbnail</label>
              <div className="col-sm-9">
                <img src="/img/chair.jpg" />
                <br />
                <button className="btn btn-default"> <span>Change</span></button>
                <span>&nbsp;&nbsp;&nbsp; &#x2714; Already set from "Media".</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-images">
              <label className="col-sm-3 text-right">Label Status</label>
              <div className="col-sm-9">
                <div className="form-group mb-30">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label for="radio1">
                          None
										    </label>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label for="radio1">
                          Coming Soon
										    </label>
                      </div>
                    </div>

                    <div className="col-sm-5">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label for="radio1">
                          In-Stock
										    </label>
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label for="radio1">
                          New
										    </label>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label for="radio1">
                          Pre-Order
										    </label>
                      </div>
                    </div>

                    <div className="col-sm-5">
                      <div className="radio radio-info">
                        <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                        <label for="radio1">
                          Sold-Out
										    </label>
                      </div>
                    </div>
                  </div>
                  {/* /row */}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group mt-10">
                        <select className="form-control">
                          <option value="">White Sideshow Logo</option>
                          <option value="">White Sideshow Logo - RIGHT</option>
                          <option value="">White Sideshow Logo - LEFT</option>
                          <option value="">Black Sideshow Logo - RIGHT</option>
                          <option value="">Black Sideshow Logo - LEFT</option>
                          <option value="">No Logo</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /first col */}
        <div className="col-sm-6">
          <div className="row">
            <div className="product-images">
              <label className="col-sm-3 text-right">Main Display</label>
              <div className="col-sm-9">
                <div className="main-display-image">
                  <img src="/img/slide1.jpg" />
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="radio radio-info">
                      <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                      <label for="radio1">
                      </label>
                      <button className="btn btn-default" >Change</button>
                      <span>&nbsp;&nbsp;&nbsp; &#x2714; Already set from "Media".</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="radio radio-info ">
                      <input type="text" className="form-control youtube-link-input" placeholder="Product Title" />
                      <input type="radio" name="radio" id="radio1" value="option1" checked="" />
                      <label className="youtube-link" for="radio1">
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group mt-10">
                          <select className="form-control">
                            <option value="">White Sideshow Logo</option>
                            <option value="">White Sideshow Logo - RIGHT</option>
                            <option value="">White Sideshow Logo - LEFT</option>
                            <option value="">Black Sideshow Logo - RIGHT</option>
                            <option value="">Black Sideshow Logo - LEFT</option>
                            <option value="">No Logo</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row product-images mb-60">
            <label className="col-sm-3 text-right">Banner</label>
            <div className="col-sm-9">
              <div className="banner-image">
                <img src="/img/slide1.jpg" />
                <button className="btn btn-default"> <span>Change</span></button>
                <span>&nbsp;&nbsp;&nbsp; &#x2714; Already set from "Media".</span>
              </div>
            </div>
          </div>
          <div className="row banner-switch">
            <label className="col-sm-3 text-right"></label>
            <div className="col-sm-9">
              <div className="row">
                <Switch
                  className="switch-class col-sm-2"
                  options={
                    {
                      color: '#474F79',
                      size: 'small'
                    }
                  }
                />
                <div className="col-sm-10">
                  <span >&nbsp;&nbsp;&nbsp; This will add banner to home page.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductMedia
