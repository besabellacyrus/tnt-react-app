import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

export default function LeftSidebar (props) {
  const history = useHistory();

  const goTo = (route) => {
    console.log({ props })
    history.push(route)
  }
  return (
    <div className="fixed-sidebar-left">
      <ul className="nav navbar-nav side-nav nicescroll-bar">
        <li className="navigation-header">
          <span>Main</span>
          <i className="zmdi zmdi-more"></i>
        </li>
        <li>
          <a className="active" href="javascript:void(0);" data-toggle="collapse" data-target="#dashboard_dr"><div className="pull-left"><i className="fa fa-sitemap mr-20"></i><span className="right-nav-text">Items and Inventory</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
          <ul id="dashboard_dr" className="left-sidebar-wrapper collapse collapse-level-1">
            <li>
              <a onClick={goTo.bind(null, '/products')}>Products</a>
            </li>
            <li>
              <a onClick={goTo.bind(null, '/featured-products')}>Featured Products</a>
            </li>
            <li>
              <a onClick={goTo.bind(null, '/special-deals')}>Special Deals</a>
            </li>
            <li>
              <a onClick={goTo.bind(null, '/product-inventory')}>Product Inventory</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
