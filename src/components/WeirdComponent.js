import React from 'react'

const WeirdComponent = () => {
  return (
    <ul className="dropdown-menu mega-menu pa-0" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
      <li className="product-nicescroll-bar row">
        <ul className="pa-20">
          <li className="col-md-3 col-xs-6 col-menu-list">
            <a href="javascript:void(0);"><div className="pull-left"><i className="zmdi zmdi-landscape mr-20"></i><span className="right-nav-text">Dashboard</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
            <hr className="light-grey-hr ma-0" />
            <ul>
              <li>
                <a href="index.html">Analytical</a>
              </li>
              <li>
                <a href="index2.html">Demographic</a>
              </li>
              <li>
                <a href="index3.html">Project</a>
              </li>
              <li>
                <a href="index4.html">Hospital</a>
              </li>
              <li>
                <a href="index5.html">HRM</a>
              </li>
              <li>
                <a href="index6.html">Real Estate</a>
              </li>
              <li>
                <a href="profile.html">profile</a>
              </li>
            </ul>
          </li>
          <li className="col-md-3 col-xs-6 col-menu-list">
            <a href="javascript:void(0);">
              <div className="pull-left">
                <i className="zmdi zmdi-shopping-basket mr-20"></i><span className="right-nav-text">E-Commerce</span>
              </div>
              <div className="pull-right"><span className="label label-success">hot</span>
              </div>
              <div className="clearfix"></div>
            </a>
            <hr className="light-grey-hr ma-0" />
            <ul>
              <li>
                <a href="e-commerce.html">Dashboard</a>
              </li>
              <li>
                <a href="product.html">Products</a>
              </li>
              <li>
                <a href="product-detail.html">Product Detail</a>
              </li>
              <li>
                <a href="add-products.html">Add Product</a>
              </li>
              <li>
                <a href="product-orders.html">Orders</a>
              </li>
              <li>
                <a href="product-cart.html">Cart</a>
              </li>
              <li>
                <a href="product-checkout.html">Checkout</a>
              </li>
            </ul>
          </li>
          <li className="col-md-6 col-xs-12 preview-carousel">
            <a href="javascript:void(0);"><div className="pull-left"><span className="right-nav-text">latest products</span></div><div className="clearfix"></div></a>
            <hr className="light-grey-hr ma-0" />
            <div className="product-carousel owl-carousel owl-theme text-center">
              <a href="#">
                <img src="/img/chair.jpg" alt="chair" />
                <span>Circle chair</span>
              </a>
              <a href="#">
                <img src="/img/chair2.jpg" alt="chair" />
                <span>square chair</span>
              </a>
              <a href="#">
                <img src="/img/chair3.jpg" alt="chair" />
                <span>semi circle chair</span>
              </a>
              <a href="#">
                <img src="/img/chair4.jpg" alt="chair" />
                <span>wooden chair</span>
              </a>
              <a href="#">
                <img src="/img/chair2.jpg" alt="chair" />
                <span>square chair</span>
              </a>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default WeirdComponent
