import React, { useState, useEffect } from 'react';
import ProductEditForm from '../ProductEditForm';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../styles/components/updateView.scss';
import ProductMedia from '../ProductMedia';
import NavigationWithBack from '../../components/NavigationWithBack';
import ProductPrice from '../ProductPrice';
import ProductSupplier from '../ProductSupplier';
import { AppGet } from '../../api';
import Card from '../../components/Card';

const UpdateView = (props) => {
  const { match: { params } } = props;

  const [productData, setProductData] = useState({});
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    AppGet(`/api/product/${params.productId}`)
      .then((res) => {
        if (res.data) {
          console.log({ ppppp: res.data.data });
          setProductData(res.data.data);
          setThumbnail(res.data.thumbnail)
          console.log({ data: res.data })
        }
      })
      .catch((err) => {
        console.log({ err })
      })
  }, []);

  return (
    <React.Fragment>

      <Tabs className="">
        <div className="row"><NavigationWithBack title="Products" /></div>
        <div className="row">
          <TabList className="product-tab-wrapper new-prod-nav">
            <Tab className="btn app-btn app-btn-not-active">Product Information</Tab>
            <Tab className="btn app-btn app-btn-not-active">Product Media</Tab>
            <Tab className="btn app-btn app-btn-not-active">Product Price</Tab>
            <Tab className="btn app-btn app-btn-not-active">Product Supplier</Tab>
          </TabList>
        </div>
        <div className="row">
          <TabPanel>
            <Card>
              <ProductEditForm productData={productData} brands={brands} categories={categories} types={types} />
            </Card>
          </TabPanel>
          <TabPanel>
            <ProductMedia productId={params.productId} productData={{ ...productData, thumbnail }} />
          </TabPanel>
          <TabPanel>
            <ProductPrice />
          </TabPanel>
          <TabPanel>
            <ProductSupplier />
          </TabPanel>
        </div>
        <div className="row">
          <div className="pull-right">
            <button className="btn app-btn btn-primary">Preview</button>
            <button form='first-part-form' type="submit" className="btn app-btn btn-primary">Save</button>
            <button className="btn app-btn btn-danger">Cancel</button>
          </div>
        </div>
      </Tabs>
    </React.Fragment>
  )
}

export default UpdateView
