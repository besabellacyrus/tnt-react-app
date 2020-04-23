import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from "./routes/Login";
import Products from "./routes/Products";
import AddProduct from "./routes/AddProduct";
import AddSchedule from "./routes/AddSchedule";
import FeaturedProducts from './routes/FeaturedProducts';
import SpecialDeals from "./routes/SpecialDeals";
import AddSpecialDeals from "./routes/AddSpecialDeals";
import Dashboard from "./routes/Dashboard";
import ProductInventory from "./routes/ProductInventory";
import LoginLayout from "./LoginLayout";
import SamplePage from "./routes/SamplePage";
import AuthenticatedRoute from "./AuthenticatedRoute";
import AddProductMedia from './routes/AddProductMedia';
import $ from 'jquery';
import UpdateView from './routes/Product/UpdateView';
// const Products = lazy(() => import('./routes/Product'));
import { LightgalleryProvider } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";

const App = (props) => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    var $preloader = $(".preloader-it > .la-anim-1");
    $preloader.addClass('la-animate');
    return () => {
    }
  })

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad () {
    try {
      let access_token = sessionStorage.getItem('access_token');
      let user = sessionStorage.getItem('user');
      console.log({ access_token, user })
      if (access_token && user) {
        userHasAuthenticated(true);
      } else {
        userHasAuthenticated(false);
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <LightgalleryProvider
      galleryClassName="my_custom_classname"
    >
      <Router>
        <div className="preloader-it">
          <div className="la-anim-1"></div>
        </div>
        <div className="wrapper theme-3-active pimary-color-green">
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/login" render={
              props => (
                <LoginLayout>
                  <Login {...props} />
                </LoginLayout>
              )
            } />
            <AuthenticatedRoute path="/sample" component={SamplePage} appProps={{ isAuthenticated }} />

            {/* <ProductsProvider> */}
            <AuthenticatedRoute path="/dashboard" component={Dashboard} appProps={{ isAuthenticated }} />
            <AuthenticatedRoute path="/products" component={Products} appProps={{ isAuthenticated }} />
            <AuthenticatedRoute path="/add-product" component={AddProduct} appProps={{ isAuthenticated }} />
            <AuthenticatedRoute path="/add-product-media" component={AddProductMedia} appProps={{ isAuthenticated }} />
            <AuthenticatedRoute path="/featured-products" component={FeaturedProducts} appProps={{ isAuthenticated }} />
            <AuthenticatedRoute path="/special-deals" component={SpecialDeals} appProps={{ isAuthenticated }} />
            <AuthenticatedRoute path="/product-inventory" component={ProductInventory} appProps={{ isAuthenticated }} />
            {/* <AuthenticatedRoute path="/product/:productId" component={AddProduct} appProps={{ isAuthenticated }} /> */}
            <AuthenticatedRoute path="/product/:productId" component={UpdateView} appProps={{ isAuthenticated }} />
            <AuthenticatedRoute path="/schedule/:schedId" component={AddSchedule} appProps={{ isAuthenticated }} />
            <AuthenticatedRoute path="/special-deal/:dealId" component={AddSpecialDeals} appProps={{ isAuthenticated }} />
            {/* </ProductsProvider> */}

          </Switch>
        </div>
      </Router>

    </LightgalleryProvider>

  );
}

export default App;
