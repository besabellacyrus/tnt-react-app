import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Navbar from './components/Navbar';

// const Products = lazy(() => import('./routes/Product'));


const DashboardLayout = ({ children, ...rest }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="right-sidebar-backdrop"></div>
      <div className="page-wrapper">
        <div className="container-fluid">
          {children}
        </div>
        <footer className="footer container-fluid pl-30 pr-30">
          <div className="row">
            <div className="col-sm-12">
              <p>{new Date().getFullYear()} &copy; Simplify.Cool. Powered by ToyNToys</p>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  )
}

function App (props) {
  return (
    <Router>
      <div className="preloader-it">
        <div className="la-anim-1"></div>
      </div>
      <div className="wrapper theme-3-active pimary-color-green">
        <Switch>
          {/* exact strict  */}
          <Route exact path="/" render={
            props => (
              <LoginLayout>
                <Login {...props} loggedInStatus={false} />
              </LoginLayout>
            )
          } />
          <Route path="/login" render={
            props => (
              <LoginLayout>
                <Login {...props} loggedInStatus={false} />
              </LoginLayout>
            )
          } />
          <Route path="/sample" render={
            props => (
              <DashboardLayout>
                <SamplePage {...props} loggedInStatus={false} />
              </DashboardLayout>
            )
          } />
          <Route path="/dashboard" render={
            props => (
              <DashboardLayout>
                <Dashboard {...props} loggedInStatus={false} />
              </DashboardLayout>
            )
          } />
          <Route path="/products" render={
            props => (
              <DashboardLayout>
                <Products {...props} loggedInStatus={false} />
              </DashboardLayout>
            )
          } />
          <Route path="/featured-products" render={
            props => (
              <DashboardLayout>
                <FeaturedProducts {...props} loggedInStatus={false} />
              </DashboardLayout>
            )
          } />
          <Route path="/special-deals" render={
            props => (
              <DashboardLayout>
                <SpecialDeals {...props} loggedInStatus={false} />
              </DashboardLayout>
            )
          } />
          <Route path="/product-inventory" render={
            props => (
              <DashboardLayout>
                <ProductInventory {...props} loggedInStatus={false} />
              </DashboardLayout>
            )
          } />
          <Route path="/product/:productId" render={
            props => (
              <DashboardLayout>
                <AddProduct {...props} loggedInStatus={false} />
              </DashboardLayout>
            )
          } />
          <Route path="/schedule/:schedId" render={
            props => (
              <DashboardLayout>
                <AddSchedule {...props} loggedInStatus={false} />
              </DashboardLayout>
            )
          } />
          <Route path="/special-deal/:dealId" render={
            props => (
              <DashboardLayout>
                <AddSpecialDeals {...props} loggedInStatus={false} />
              </DashboardLayout>
            )
          } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
