import React, { useState, useEffect } from 'react';
import AppDateTimePicker from "../components/AppDateTimePicker";
import Switch from 'react-switchery';
import { AppPatch } from '../api'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

const ProductEditForm = (props) => {
  const history = useHistory();
  const [saving, setSaving] = useState(false);

  const { register, handleSubmit, reset, setValue } = useForm(
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
    console.log({ asdasdasd: props.productData })
    // setValue('product_code', props.productData.product_code);
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
  }, [props])

  const onSubmit = data => {
    console.log({ data })

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
                  <input type="text" className="form-control" ref={register} name="product_title" placeholder="Product Title from the supplier" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Product Name</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" ref={register} name="product_name" placeholder="Shorten Name for the website" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3"><i className="fa fa-plus"></i> &nbsp; Product Type</label>
                <div className="col-md-9">
                  <select className="form-control" name="type_id" ref={register} {...isDisabled}>
                    <option selected>Choose Product Type</option>
                    {props.types.map((type, index) => (
                      <option value={type.id} key={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Brand Category</label>
                <div className="col-md-9">
                  <select className="form-control" name="brand_cat_id" {...isDisabled}>
                    <option selected>Choose Brand Category</option>
                    <option>Avengers (Marvel)</option>
                    <option>Batman (DC Comics)</option>
                    <option>Justice League (DC Comics)</option>
                    <option>Transformers (Hasbro)</option>
                    <option>Transformers G1 (Hasbro)</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3"><i className="fa fa-plus"></i>&nbsp;Brand</label>
                <div className="col-md-9">
                  <select className="form-control" name="brand" {...isDisabled}>
                    <option selected>Choose Brand</option>
                    <option>Marvel</option>
                    <option>DC Comics</option>
                    <option>Disney</option>
                    <option>Hasbro</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3"><i className="fa fa-plus"></i>&nbsp; Manufacturer</label>
                <div className="col-md-9">
                  <select className="form-control" name="manufacturer_id" {...isDisabled}>
                    <option selected>Choose Manufacturer</option>
                    <option>Mezco</option>
                    <option>Beast Kingdom</option>
                    <option>Bowen Designs</option>
                    <option>Coolprops</option>
                    <option>Neca</option>
                    <option>Imaginarium Art</option>
                    <option>Weta</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Manufacturer Category</label>
                <div className="col-md-9">
                  <select className="form-control" name="manufacture_cat_id" {...isDisabled}>
                    <option selected>Choose Manufacturer Category</option>
                    <option>5 points (Mezco)</option>
                    <option>Mini Epics (Weta)</option>
                    <option>The Legacy of Cybetron (Imaginarium Art)</option>
                    <option>PX Previews Exclusive (Mezco)</option>
                  </select>
                </div>
              </div>

              {/* {props.categories.map((category, index) => (
                      <option value={category.id} key={category.id}>{category.name}</option>
                    ))} */}
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
                <div className="col-xs-6 col-sm-8">This will be added to featured products.</div>
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
                <div className="col-xs-6 col-sm-8">This will be added to special deals.</div>
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
