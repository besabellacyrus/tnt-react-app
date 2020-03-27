import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftSidebar () {
  return (
    <div className="fixed-sidebar-left">
      <ul className="nav navbar-nav side-nav nicescroll-bar">
        <li className="navigation-header">
          <span>Main</span>
          <i className="zmdi zmdi-more"></i>
        </li>
        <li>
          <a className="active" href="javascript:void(0);" data-toggle="collapse" data-target="#dashboard_dr"><div className="pull-left"><i className="fa fa-sitemap mr-20"></i><span className="right-nav-text">Items and Inventory</span></div><div className="pull-right"><i className="zmdi zmdi-caret-down"></i></div><div className="clearfix"></div></a>
          <ul id="dashboard_dr" className="collapse collapse-level-1">
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/featured-products">Featured Products</Link>
            </li>
            <li>
              <Link to="/special-deals">Special Deals</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
