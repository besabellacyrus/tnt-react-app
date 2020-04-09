import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./routes/Login";
import Products from "./routes/Products";
import AddProduct from "./routes/AddProduct";
import AddSchedule from "./routes/AddSchedule";
import FeaturedProducts from './routes/FeaturedProducts';
import SpecialDeals from "./routes/SpecialDeals";
import AddSpecialDeals from "./routes/AddSpecialDeals";
import Dashboard from "./routes/Dashboard";
import ProductInventory from "./routes/ProductInventory";
import auth from "./Auth"
import DashboardLayout from "./DashboardLayoutRoute";
import LoginLayout from "./LoginLayoutRoute";
import SamplePage from "./routes/SamplePage";

// const Products = lazy(() => import('./routes/Product'));

function App () {
  console.log({ authenticated: auth.isAuthenticated() })
  return (
    <Router>
      <div className="preloader-it">
        <div className="la-anim-1"></div>
      </div>
      <div className="wrapper theme-3-active pimary-color-green">
        <Switch>
          {/* exact strict  */}
          <LoginLayout path="/login" component={Login} />
          <DashboardLayout path="/dashboard" component={Dashboard} />
          <DashboardLayout path="/sample" component={SamplePage} />
          <DashboardLayout path="/products" component={Products} />
          <DashboardLayout path="/featured-products" component={FeaturedProducts} />
          <DashboardLayout path="/special-deals" component={SpecialDeals} />
          <DashboardLayout path="/product-inventory" component={ProductInventory} />
          <DashboardLayout path="/product/:productId" component={AddProduct} />
          <DashboardLayout path="/schedule/:schedId" component={AddSchedule} />
          <DashboardLayout path="/special-deal/:dealId" component={AddSpecialDeals} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
