import React from 'react'
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';

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

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <DashboardLayout>
        <Component {...matchProps} />
      </DashboardLayout>
    )} />
  )
};

export default DashboardLayoutRoute
