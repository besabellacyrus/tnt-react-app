import React, { useState } from 'react'
import Switch from 'react-switchery';

const categories = [
  {
    id: 1,
    name: 'category 1'
  },
  {
    id: 2,
    name: 'category 1'
  },
]

const types = [
  {
    id: 1,
    name: 'type 1'
  },
  {
    id: 2,
    name: 'type 2'
  },
]

const brands = [
  {
    id: 1,
    name: 'brand 1'
  },
  {
    id: 2,
    name: 'brand 2'
  },
]

const ProductForm = () => {
  const [type, setType] = useState(1);
  const [brand, setBrand] = useState(1);
  const [category, setCategory] = useState(1);

  const handleChange = (event) => {
    console.log({ val: event.target.value, name: event.target.name });
    switch (event.target.name) {
      case 'brand':
        setBrand(event.target.value)
        break;
      case 'category':
        setCategory(event.target.value)
        break;
      default:
        setType(event.target.value)
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('triggered!')
  }

  return (
    <React.Fragment>
      <div className="row">
        <form id="first-part-form" onSubmit={handleSubmit} className="form-horizontal">
          <div className="col-sm-6">
            <div className="form-wrap">
              <div className="form-group">
                <label className="control-label col-md-3">Product Code</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" placeholder="Product Code" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Product Title</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" placeholder="Product Title" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Product Type</label>
                <div className="col-md-9">
                  <select className="form-control" name="type" value={type} onChange={handleChange}>
                    <option value="1">Sample 1</option>
                    <option value="2">Sample 2</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Brand</label>
                <div className="col-md-9">
                  <select className="form-control" name="brand" value={brand} onChange={handleChange}>
                    <option>Sample 1</option>
                    <option>Sample 2</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Category</label>
                <div className="col-md-9">
                  <select className="form-control" name="category" value={category} onChange={handleChange}>
                    <option>Sample 1</option>
                    <option>Sample 2</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Item Weight</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" placeholder="1" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Pcs. Per Carton</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" placeholder="Pieces Per Carton" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Inventory QTY</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" placeholder="Inventory Quantity" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Date Arrived</label>
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
                <label className="control-label col-md-3">Expiry Date</label>
                <div className="col-md-9">
                  <div className='input-group date' id='datetimepicker1'>
                    <input type='text' className="form-control" />
                    <span className="input-group-addon">
                      <span className="fa fa-calendar"></span>
                    </span>
                  </div>
                </div>
              </div>
              {/* /form */}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="switch-label">
                <div className="col-xs-4 col-sm-3 text-right">Featured</div>
                <div className="col-xs-2 col-sm-1">
                  <Switch
                    className="switch-class"
                    options={
                      {
                        color: '#fc8300',
                        size: 'small'
                      }
                    }
                    checked
                  />
                </div>
                <div className="col-xs-6 col-sm-8">This will be added to special deals.</div>
              </div>
            </div>
            <div className="row">
              <div className="switch-label">
                <div className="col-xs-4 col-sm-3 text-right">Special Deals</div>
                <div className="col-xs-2 col-sm-1">
                  <Switch
                    className="switch-class"
                    options={
                      {
                        color: '#fc8300',
                        size: 'small'
                      }
                    }
                    checked
                  />
                </div>
                <div className="col-xs-6 col-sm-8">This will be added to featured products.</div>
              </div>
            </div>
            <div className="row">
              <div className="switch-label">
                <div className="col-xs-4 col-sm-3 text-right">Recommended</div>
                <div className="col-xs-2 col-sm-1">
                  <Switch
                    className="switch-class"
                    options={
                      {
                        color: '#fc8300',
                        size: 'small'
                      }
                    }
                    checked
                  />
                </div>
                <div className="col-xs-6 col-sm-8">This will be added to <i>default</i> recommended products.</div>
              </div>
            </div>
            <div className="form-wrap">
              {/* tabs vertical */}
              <div className="tab-struct vertical-tab custom-tab-1 mt-40">
                <ul role="tablist" className="nav nav-tabs ver-nav-tab" id="myTabs_8">
                  <li className="active" role="presentation"><a aria-expanded="true" data-toggle="tab" role="tab" id="description_tab" href="#description">Description</a></li>
                  <li role="presentation" className=""><a data-toggle="tab" id="specs_tab" role="tab" href="#specs" aria-expanded="false">Specs</a></li>
                  <li role="presentation" className=""><a data-toggle="tab" id="memo_tab" role="tab" href="#memo" aria-expanded="false">Memo</a></li>

                </ul>
                <div className="tab-content" id="product-tab">
                  <div id="description" className="tab-pane fade active in" role="tabpanel">
                    <textarea rows="15" cols="56">
                      Lorem ipsum dolor sit amet, et pertinax ocurreret scribentur sit, eum euripidis assentior ei. In qui quodsi maiorum, dicta clita duo ut. Fugit sonet quo te. Ad vel quando causae signiferumque. Aperiam luptatum senserit eu vis, eu ius purto torquatos vituperatoribus.An nec fastidii eligendi molestiae.
                                  </textarea>
                  </div>
                  <div id="specs" className="tab-pane fade in" role="tabpanel">
                    <textarea rows="15" cols="56">
                      Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.
                                  </textarea>
                  </div>
                  <div id="memo" className="tab-pane fade in" role="tabpanel">
                    <textarea rows="15" cols="56">

                      Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
                                </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default ProductForm
