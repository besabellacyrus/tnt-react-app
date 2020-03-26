import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftSidebar () {
  return (
    <div className="fixed-sidebar-left">
      <ul className="nav navbar-nav side-nav nicescroll-bar">
        <li>
          <a class="active" href="javascript:void(0);" data-toggle="collapse" data-target="#dashboard_dr"><div class="pull-left"><i class="fa fa-sitemap mr-20"></i><span class="right-nav-text">Items and Inventory</span></div><div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div><div class="clearfix"></div></a>
          <ul id="dashboard_dr" class="collapse collapse-level-1">
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
