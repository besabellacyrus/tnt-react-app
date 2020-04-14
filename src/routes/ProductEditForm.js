import React, { useState, useEffect } from 'react';
import AppDateTimePicker from "../components/AppDateTimePicker";
import Switch from 'react-switchery';
import { AppPatch } from '../api'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

const ProductEditForm = (props) => {
  const history = useHistory();
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState({})

  const { register, handleSubmit, reset } = useForm(
    {
      defaultValues: {
        product_code: "",
        product_title: "",
        product_name: "",
        weight: 0,
        pcs_per_carton: 0,
        qty: 0,
        product_brand: "",
        product_type: "",
        product_category: "",
        date_arrived: "",
        expiry_date: "",
        description: "",
        memo: "",
        specs: "",
      }
    }
  );

  useEffect(() => {
    console.log({ prd: props.productData })
    reset({
      product_code: props.productData.product_code,
      product_title: props.productData.product_title,
      product_name: props.productData.product_name,
      type_id: props.productData.product_type,
      brand_id: props.productData.product_brand,
      category_id: props.productData.product_category,
      weight: props.productData.weight,
      qty: props.productData.qty,
      pcs_per_carton: props.productData.pcs_per_carton,
      memo: props.productData.memo,
      specs: props.productData.specs,
      description: props.productData.description,
      date_arrived: props.productData.date_arrived,
      expiry_date: props.productData.expiry_date,
    })
  },[props])

  const onSubmit = data => {
    console.log({data})

    AppPatch(`/api/product/${props.productData.id}`, data)
      .then(res => {
        console.log({ res })
        if (res.data.status === 'updated') {
          history.push(`/product/${res.data.product.id}`)
        }
        setSaving(false);
      }).catch(e => {
        console.log({ e })
        setSaving(false);
      })
  };

  let isDisabled = saving ? { disabled: 'disabled' } : {};


  return (
    <React.Fragment>
      <div className="row">
        <form id="first-part-form" onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
          <div className="col-sm-6">
            <div className="form-wrap">
              <div className="form-group">
                <label className="control-label col-md-3">Product Code</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" ref={register} name="product_code" placeholder="Product Code" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Product Title</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" ref={register} name="product_title" placeholder="Product Title" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Product Name</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" ref={register} name="product_name" placeholder="Product Name" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Product Type</label>
                <div className="col-md-9">
                  <select className="form-control" name="type_id" ref={register} {...isDisabled}>
                    <option value="1">Type 1</option>
                    <option value="2">Type 2</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Brand</label>
                <div className="col-md-9">
                  <select className="form-control" name="brand_id" ref={register} {...isDisabled}>
                    <option value="1">Neca</option>
                    <option value="2">Brand 2</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Category</label>
                <div className="col-md-9">
                  <select className="form-control" name="category_id" ref={register} {...isDisabled}>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Item Weight</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" ref={register} name="weight" placeholder="" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Pcs. Per Carton</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" ref={register} name="pcs_per_carton" placeholder="Pieces Per Carton" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Inventory QTY</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" ref={register} name="qty" placeholder="Inventory Quantity" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Date Arrived</label>
                <div className="col-md-9">
                  <AppDateTimePicker name="date_arrived" ref={register} {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Expiry Date</label>
                <div className="col-md-9">
                  <AppDateTimePicker name="expiry_date" ref={register} {...isDisabled} />
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
                    <textarea rows="15" cols="56" name="description" ref={register} {...isDisabled}>
                    </textarea>
                  </div>
                  <div id="specs" className="tab-pane fade in" role="tabpanel">
                    <textarea rows="15" cols="56" name="specs" ref={register} {...isDisabled}>
                    </textarea>
                  </div>
                  <div id="memo" className="tab-pane fade in" role="tabpanel">
                    <textarea rows="15" cols="56" name="memo" ref={register} {...isDisabled}>
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

export default ProductEditForm
