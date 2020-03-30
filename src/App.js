import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from "./routes/Products";
import Product from "./routes/Product";
import FeaturedProducts from './routes/FeaturedProducts';
import SpecialDeals from "./routes/SpecialDeals";
import Dashboard from "./routes/Dashboard";

// const Products = lazy(() => import('./routes/Product'));

function App () {
  return (
    <Router>
      <div className="preloader-it">
        <div className="la-anim-1"></div>
      </div>
      <div className="wrapper theme-3-active pimary-color-green">
        <Navbar />
        <div className="right-sidebar-backdrop"></div>
        <div className="page-wrapper">
          <div className="container-fluid">
            <Route path="/" exact strict component={Dashboard} />
            <Route path="/products" component={Products} />
            <Route path="/featured-products" component={FeaturedProducts} />
            <Route path="/special-deals" component={SpecialDeals} />
            <Route path="/product/:id" component={Product} />
          </div>
          <footer className="footer container-fluid pl-30 pr-30">
            <div className="row">
              <div className="col-sm-12">
                <p>{new Date().getFullYear} &copy; Simplify.Cool. Powered by ToyNToys</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
