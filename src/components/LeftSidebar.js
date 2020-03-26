import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftSidebar () {
  return (
    <div className="fixed-sidebar-left">
      <ul className="nav navbar-nav side-nav nicescroll-bar">
        <li>
          <a class="active" href="javascript:void(0);" data-toggle="collapse" data-target="#dashboard_dr"><div class="pull-left"><i class="zmdi zmdi-landscape mr-20"></i><span class="right-nav-text">Dashboard</span></div><div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div><div class="clearfix"></div></a>
          <ul id="dashboard_dr" class="collapse collapse-level-1">
            <li>
              <a class="active-page" href="index.html">Analytical</a>
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
      </ul>
    </div>
  )
}
