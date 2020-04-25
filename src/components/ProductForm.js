import React, { useState, useEffect } from 'react'
import Switch from 'react-switchery';
import AppDateTimePicker from './AppDateTimePicker';
import useFormTool from '../CustomHooks';
import { AppPost, AppPatch } from '../api'
import { useHistory } from 'react-router-dom';

const ProductForm = (props) => {
  const history = useHistory();
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [saving, setSaving] = useState(false);
  const [productCode, setProductCode] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productName, setProductName] = useState("");
  const [weight, setWeight] = useState(0);
  const [pcsPerCarton, setPcsPerCarton] = useState(0);
  const [qty, setQty] = useState(0);
  const [specs, setSpecs] = useState("No Data");
  const [memo, setMemo] = useState("No Data");
  const [description, setDescription] = useState("No Data");
  const [dateArrived, setDateArrived] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  let brands = []
  let types = []
  let categories = []

  useEffect(() => {
    console.log('pppppp');
    // let txt;
    // var r = confirm("Do you want to save to proceed?");
    // if (r == true) {
    //   txt = "You pressed OK!";
    //   handleSubmit();
    // } else {
    //   txt = "You pressed Cancel!";
    // }
    handleSubmit();

  }, [props.pushSave])


  let isDisabled = saving ? { disabled: 'disabled' } : {};

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
    console.log({ brand, type, category })
  }

  const handleSave = () => {
    setSaving(true);
    const product = {
      product_code: inputs.product_code,
      product_name: inputs.product_name,
      product_title: inputs.product_title,
      description: inputs.description,
      pcs_per_carton: inputs.pcs_per_carton,
      weight: inputs.weight,
      qty: inputs.qty,
      date_arrived: inputs.date_arrived,
      expiry_date: inputs.expiry_date,
      specs: inputs.specs,
      memo: inputs.memo,
      type_id: type,
      brand_id: brand,
      category_id: category,
      profile: '/img/thumbnail/MEZ76515_thumbnail.jpg'
    };

    let urlPath = window.location.href.split('/')[3];
    console.log({ product, brand, type, category, urlPath })

    if (urlPath === 'product') {
      // const productUpdate = {
      //   product_code: productCode,
      //   product_name:  productName,
      //   product_title: productTitle,
      //   description: description,
      //   pcs_per_carton: pcsPerCarton,
      //   weight: weight,
      //   qty: qty,
      //   date_arrived: dateArrived,
      //   expiry_date: expiryDate,
      //   specs: specs,
      //   memo: memo,
      //   type_id: type,
      //   brand_id: brand,
      //   category_id: category,
      //   profile: '/img/thumbnail/MEZ76515_thumbnail.jpg'
      // };

      console.log('update button', inputs)
      // AppPatch('/api/product', { ...productUpdate })
      // .then(res => {
      //   console.log({ res })
      //   if (res.data.status === 'updated') {
      //     history.push(`/product/${res.data.product.id}`)
      //   }
      //   setSaving(false);
      // }).catch(e => {
      //   console.log({ e })
      //   setSaving(false);
      // })
    }

    if (urlPath === 'add-product') {
      AppPost('/api/product', { ...product })
        .then(res => {
          console.log({ res })
          if (res.data.status === 'created') {
            history.push(`/product/${res.data.product.id}`)
          }
          setSaving(false);
        }).catch(e => {
          console.log({ e })
          setSaving(false);
        })
    }
  }

  const handleUpdate = () => {
    console.log('handle update');
  }

  const { inputs, handleInputChange, handleSubmit } = useFormTool(handleSave);

  useEffect(() => {
    console.log({ proooo: props.productData })
    if (Object.keys(props.productData).length !== 0 && props.productData.constructor === Object) {
      setType(props.productData.type_id)
      setBrand(props.productData.brand_id)
      setCategory(props.productData.category_id)
    }
    setProductCode(props.productData.product_code)
    setProductTitle(props.productData.product_title)
    setProductName(props.productData.product_name)
    setWeight(props.productData.weight)
    setPcsPerCarton(props.productData.pcs_per_carton)
    setQty(props.productData.qty)
    setDescription(props.productData.qty)
    setSpecs(props.productData.qty)
    setMemo(props.productData.qty)
    setDateArrived(props.productData.date_arrived)
    setExpiryDate(props.productData.expiry_date)
  })

  return (
    <React.Fragment>
      <div className="row">
        <form id="first-part-form" onSubmit={handleSubmit} className="form-horizontal">
          <div className="col-sm-6">
            <div className="form-wrap">
              <div className="form-group">
                <label className="control-label col-md-3">Product Code</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" value={productCode} onChange={handleInputChange} name="product_code" placeholder="Product Code" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Product Title</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" value={productTitle} onChange={handleInputChange} name="product_title" placeholder="Product Title from the supplier" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Product Name</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" value={productName} onChange={handleInputChange} name="product_name" placeholder="Shorten Name for the website" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3"><i className="fa fa-plus"></i>&nbsp;Product Type</label>
                <div className="col-md-9">
                  <select className="form-control" name="type" value={type} onChange={handleChange} {...isDisabled}>
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
              <div className="form-group">
                <label className="control-label col-md-3">Item Weight</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" value={weight} onChange={handleInputChange} name="weight" placeholder="" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Pcs. Per Carton</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" value={pcsPerCarton} onChange={handleInputChange} name="pcs_per_carton" placeholder="Pieces Per Carton" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Inventory QTY</label>
                <div className="col-md-9">
                  <input type="text" className="form-control" value={qty} onChange={handleInputChange} name="qty" placeholder="Inventory Quantity" {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Date Arrived</label>
                <div className="col-md-9">
                  <AppDateTimePicker name="date_arrived" value={dateArrived} onSelect={handleInputChange} {...isDisabled} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3">Expiry Date</label>
                <div className="col-md-9">
                  <AppDateTimePicker name="expiry_date" value={expiryDate} onSelect={handleInputChange} {...isDisabled} />
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
                    <textarea rows="15" cols="56" name="description" value={description} onSelect={handleInputChange} {...isDisabled}>
                    </textarea>
                  </div>
                  <div id="specs" className="tab-pane fade in" role="tabpanel">
                    <textarea rows="15" cols="56" name="specs" value={specs} onSelect={handleInputChange} {...isDisabled}>
                    </textarea>
                  </div>
                  <div id="memo" className="tab-pane fade in" role="tabpanel">
                    <textarea rows="15" cols="56" name="memo" value={memo} onSelect={handleInputChange} {...isDisabled}>
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
