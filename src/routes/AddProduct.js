import React, { useEffect, useState } from 'react'
import '../vendors/bower_components/switchery/dist/switchery.js';
import ProductNav from '../components/ProductNav';
import ProductForm from '../components/ProductForm';
import ProductDateInfo from "../components/product/ProductDateInfo";
import ProductDateOfferSpecial from "../components/product/ProductDateOfferSpecial";
import ProductEditForm from "../routes/ProductEditForm";
import NavigationWithBack from "../components/NavigationWithBack";
import AppDialog from "../components/AppDialog";

import { AppGet } from '../api'

const Product = (props) => {
  const { match: { params } } = props;
  const [productData, setProductData] = useState({});
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pushSave, setPushSave] = useState(false);

  console.log({ params: params.productId })

  useEffect(() => {
    if (params.productId !== 'undefined') {
      AppGet(`/api/product/${params.productId}`)
        .then((res) => {
          if (res.data) {
            setProductData(res.data)
            console.log({ getRes: res.data })
          }
        })
        .catch((err) => {
          console.log({ err })
        })
    } else {
      console.log(' no data params ')
    }
    getBrands();
    getTypes();
    getCategory();
  }, []);

  const getBrands = () => {
    console.log('brannnds')
    AppGet('/api/brand')
      .then((res) => {
        console.log({ res })
        setBrands(res.data)
      }).catch(err => {
        console.log({ err })
      })
  }

  const getTypes = () => {
    AppGet('/api/type')
      .then((res) => {
        console.log({ res })

        setTypes(res.data)

      }).catch(err => {
        console.log({ err })
      })
  }

  const getCategory = () => {
    AppGet('/api/category')
      .then((res) => {
        console.log({ res })
        setCategories(res.data)
      }).catch(err => {
        console.log({ err })
      })
  }

  let urlPath = window.location.href.split('/')[3];

  let FormUi;
  if (urlPath === 'product') {
    FormUi = <ProductEditForm productData={productData} brands={brands} categories={categories} types={types} />
  } else {
    FormUi = <ProductForm pushSave={pushSave} productData={productData} brands={brands} categories={categories} types={types} />
  }
  const handlePushSave = () => {
    // var r = confirm("Do you want to save to proceed?");
    // if (r == true) {
    //   setPushSave(true);
    // } else {
    //   console.log('dont push save');
    // }
  }

  return (
    <React.Fragment>
      <AppDialog>
        <h3>Hello</h3>
      </AppDialog>
      <ProductNav pushSave={handlePushSave} />
      <div className="mt-20">
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
                    {/* <ProductForm productData={productData} /> */}
                    <NavigationWithBack title="Products" />

                    {FormUi}
                    <hr></hr>
                    <ProductDateOfferSpecial />
                    <hr></hr>
                    <ProductDateInfo />
                  </div>
                </div>
              </div>
            </div>
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
