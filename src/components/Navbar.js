import React, { Component } from 'react'
import LeftSidebar from "./LeftSidebar";
import { Link } from 'react-router-dom'
import $ from 'jquery';


class Navbar extends Component {
  componentDidMount () {
    const $wrapper = $(".wrapper");
    $(document).on('click', '#toggle_nav_btn,#open_right_sidebar,#setting_panel_btn', function (e) {
      $(".dropdown.open > .dropdown-toggle").dropdown("toggle");
      return false;
    });
    $(document).on('click', '#toggle_nav_btn', function (e) {
      $wrapper.removeClass('open-right-sidebar open-setting-panel').toggleClass('slide-nav-toggle');
      return false;
    });
    $(document).on('click', '#open_right_sidebar', function (e) {
      $wrapper.toggleClass('open-right-sidebar').removeClass('open-setting-panel');
      return false;
    });
    $(document).on('click', '.product-carousel .owl-nav', function (e) {
      return false;
    });
    $(document).on('click', 'body', function (e) {
      // console.log('clicked 5')
      if ($(e.target).closest('.fixed-sidebar-right,.setting-panel').length > 0) {
        return;
      }
      $('body > .wrapper').removeClass('open-right-sidebar open-setting-panel');
      return;
    });
    $(document).on('show.bs.dropdown', '.nav.navbar-right.top-nav .dropdown', function (e) {
      $wrapper.removeClass('open-right-sidebar open-setting-panel');
      return;
    });

    $(document).on('click', '#setting_panel_btn', function (e) {
      $wrapper.toggleClass('open-setting-panel').removeClass('open-right-sidebar');
      return false;
    });
    $(document).on('click', '#toggle_mobile_nav', function (e) {
      $wrapper.toggleClass('mobile-nav-open').removeClass('open-right-sidebar');
      return;
    });


    $(document).on("mouseenter mouseleave", ".wrapper > .fixed-sidebar-left", function (e) {
      if (e.type === "mouseenter") {
        $wrapper.addClass("sidebar-hover");
      }
      else {
        $wrapper.removeClass("sidebar-hover");
      }
      return false;
    });

    $(document).on("mouseenter mouseleave", ".wrapper > .setting-panel", function (e) {
      if (e.type === "mouseenter") {
        $wrapper.addClass("no-transition");
      }
      else {
        $wrapper.removeClass("no-transition");
      }
      return false;
    });
    $('ul.dropdown-menu').on('click', function (event) {
      // The event won't be propagated up to the document NODE and
      // therefore delegated events won't be fired
      event.stopPropagation();
    });
  }

  render () {
    return (
      <React.Fragment>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="mobile-only-brand pull-left">
            <div className="nav-header pull-left">
              <div className="logo-wrap">
                <Link to="/">
                  <img className="brand-img" src="/img/simplifycool-icon.svg" alt="brand" />
                  <span className="brand-text">simplify.cool</span>
                </Link>
              </div>
            </div>
            <a id="toggle_nav_btn" className="toggle-left-nav-btn inline-block ml-20 pull-left" href="javascript:"><i className="zmdi zmdi-menu"></i></a>
            <a id="toggle_mobile_search" data-toggle="collapse" data-target="#search_form" className="mobile-only-view" href="javascript:"><i className="zmdi zmdi-search"></i></a>
            <a id="toggle_mobile_nav" className="mobile-only-view" href="javascript:"><i className="zmdi zmdi-more"></i></a>
            <form id="search_form" role="search" className="top-nav-search collapse pull-left">
              <div className="input-group">
                <input type="text" name="example-input1-group2" className="form-control" placeholder="Search" />
                <span className="input-group-btn">
                  <button type="button" className="btn  btn-default" data-target="#search_form" data-toggle="collapse" aria-label="Close" aria-expanded="true"><i className="zmdi zmdi-search"></i></button>
                </span>
              </div>
            </form>
          </div>
          <div id="mobile_only_nav" className="mobile-only-nav pull-right">
            <ul className="nav navbar-right top-nav pull-right">
              <li className="language-select">
                <a>
                  <select className="form-control" data-placeholder="Language">
                    <option>English</option>
                    <option>Chinese</option>
                  </select>
                </a>
              </li>
              <li>
                <a id="open_right_sidebar" href="#"><i className="zmdi zmdi-settings top-nav-icon"></i></a>
              </li>
              <li className="dropdown app-drp">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="zmdi zmdi-apps top-nav-icon"></i></a>
                <ul className="dropdown-menu app-dropdown" data-dropdown-in="slideInRight" data-dropdown-out="flipOutX">
                  <li>
                    <div className="app-nicescroll-bar">
                      <ul className="app-icon-wrap pa-10">
                        <li>
                          <a href="weather.html" className="connection-item">
                            <i className="zmdi zmdi-cloud-outline txt-info"></i>
                            <span className="block">weather</span>
                          </a>
                        </li>
                        <li>
                          <a href="inbox.html" className="connection-item">
                            <i className="zmdi zmdi-email-open txt-success"></i>
                            <span className="block">e-mail</span>
                          </a>
                        </li>
                        <li>
                          <a href="calendar.html" className="connection-item">
                            <i className="zmdi zmdi-calendar-check txt-primary"></i>
                            <span className="block">calendar</span>
                          </a>
                        </li>
                        <li>
                          <a href="vector-map.html" className="connection-item">
                            <i className="zmdi zmdi-map txt-danger"></i>
                            <span className="block">map</span>
                          </a>
                        </li>
                        <li>
                          <a href="chats.html" className="connection-item">
                            <i className="zmdi zmdi-comment-outline txt-warning"></i>
                            <span className="block">chat</span>
                          </a>
                        </li>
                        <li>
                          <a href="contact-card.html" className="connection-item">
                            <i className="zmdi zmdi-assignment-account"></i>
                            <span className="block">contact</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="app-box-bottom-wrap">
                      <hr className="light-grey-hr ma-0" />
                      <a className="block text-center read-all" href="javascript:void(0)"> more </a>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown full-width-drp">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="zmdi zmdi-more-vert top-nav-icon"></i></a>
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
              </li>
              <li className="dropdown alert-drp">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="zmdi zmdi-notifications top-nav-icon"></i><span className="top-nav-icon-badge">5</span></a>
                <ul className="dropdown-menu alert-dropdown" data-dropdown-in="bounceIn" data-dropdown-out="bounceOut">
                  <li>
                    <div className="notification-box-head-wrap">
                      <span className="notification-box-head pull-left inline-block">notifications</span>
                      <a className="txt-danger pull-right clear-notifications inline-block" href="javascript:void(0)"> clear all </a>
                      <div className="clearfix"></div>
                      <hr className="light-grey-hr ma-0" />
                    </div>
                  </li>
                  <li>
                    <div className="streamline message-nicescroll-bar">
                      <div className="sl-item">
                        <a href="javascript:void(0)">
                          <div className="icon bg-green">
                            <i className="zmdi zmdi-flag"></i>
                          </div>
                          <div className="sl-content">
                            <span className="inline-block capitalize-font  pull-left truncate head-notifications">
                              New subscription created</span>
                            <span className="inline-block font-11  pull-right notifications-time">2pm</span>
                            <div className="clearfix"></div>
                            <p className="truncate">Your customer subscribed for the basic plan. The customer will pay $25 per month.</p>
                          </div>
                        </a>
                      </div>
                      <hr className="light-grey-hr ma-0" />
                      <div className="sl-item">
                        <a href="javascript:void(0)">
                          <div className="icon bg-yellow">
                            <i className="zmdi zmdi-trending-down"></i>
                          </div>
                          <div className="sl-content">
                            <span className="inline-block capitalize-font  pull-left truncate head-notifications txt-warning">Server #2 not responding</span>
                            <span className="inline-block font-11 pull-right notifications-time">1pm</span>
                            <div className="clearfix"></div>
                            <p className="truncate">Some technical error occurred needs to be resolved.</p>
                          </div>
                        </a>
                      </div>
                      <hr className="light-grey-hr ma-0" />
                      <div className="sl-item">
                        <a href="javascript:void(0)">
                          <div className="icon bg-blue">
                            <i className="zmdi zmdi-email"></i>
                          </div>
                          <div className="sl-content">
                            <span className="inline-block capitalize-font  pull-left truncate head-notifications">2 new messages</span>
                            <span className="inline-block font-11  pull-right notifications-time">4pm</span>
                            <div className="clearfix"></div>
                            <p className="truncate"> The last payment for your G Suite Basic subscription failed.</p>
                          </div>
                        </a>
                      </div>
                      <hr className="light-grey-hr ma-0" />
                      <div className="sl-item">
                        <a href="javascript:void(0)">
                          <div className="sl-avatar">
                            <img className="img-responsive" src="/img/avatar.jpg" alt="avatar" />
                          </div>
                          <div className="sl-content">
                            <span className="inline-block capitalize-font  pull-left truncate head-notifications">Sandy Doe</span>
                            <span className="inline-block font-11  pull-right notifications-time">1pm</span>
                            <div className="clearfix"></div>
                            <p className="truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                          </div>
                        </a>
                      </div>
                      <hr className="light-grey-hr ma-0" />
                      <div className="sl-item">
                        <a href="javascript:void(0)">
                          <div className="icon bg-red">
                            <i className="zmdi zmdi-storage"></i>
                          </div>
                          <div className="sl-content">
                            <span className="inline-block capitalize-font  pull-left truncate head-notifications txt-danger">99% server space occupied.</span>
                            <span className="inline-block font-11  pull-right notifications-time">1pm</span>
                            <div className="clearfix"></div>
                            <p className="truncate">consectetur, adipisci velit.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="notification-box-bottom-wrap">
                      <hr className="light-grey-hr ma-0" />
                      <a className="block text-center read-all" href="javascript:void(0)"> read all </a>
                      <div className="clearfix"></div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown auth-drp">
                <a href="#" className="dropdown-toggle pr-0" data-toggle="dropdown"><img src="/img/user1.png" alt="user_auth" className="user-auth-img img-circle" /><span className="user-online-status"></span></a>
                <ul className="dropdown-menu user-auth-dropdown" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
                  <li>
                    <a href="profile.html"><i className="zmdi zmdi-account"></i><span>Profile</span></a>
                  </li>
                  <li>
                    <a href="#"><i className="zmdi zmdi-card"></i><span>my balance</span></a>
                  </li>
                  <li>
                    <a href="inbox.html"><i className="zmdi zmdi-email"></i><span>Inbox</span></a>
                  </li>
                  <li>
                    <a href="#"><i className="zmdi zmdi-settings"></i><span>Settings</span></a>
                  </li>
                  <li className="divider"></li>
                  <li className="sub-menu show-on-hover">
                    <a href="#" className="dropdown-toggle pr-0 level-2-drp"><i className="zmdi zmdi-check text-success"></i> available</a>
                    <ul className="dropdown-menu open-left-side">
                      <li>
                        <a href="#"><i className="zmdi zmdi-check text-success"></i><span>available</span></a>
                      </li>
                      <li>
                        <a href="#"><i className="zmdi zmdi-circle-o text-warning"></i><span>busy</span></a>
                      </li>
                      <li>
                        <a href="#"><i className="zmdi zmdi-minus-circle-outline text-danger"></i><span>offline</span></a>
                      </li>
                    </ul>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#"><i className="zmdi zmdi-power"></i><span>Log Out</span></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <LeftSidebar />
      </React.Fragment>
    )
  }
}

export default Navbar
