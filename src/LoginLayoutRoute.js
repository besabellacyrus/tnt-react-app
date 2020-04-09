import React from 'react'
import { Route } from 'react-router-dom';

const LoginLayout = ({ children, ...rest }) => {
  return (
    <React.Fragment>
      <div className="preloader-it">
        <div className="la-anim-1"></div>
      </div>
      <div className="wrapper theme-3-active pimary-color-green">
        {children}
      </div>
    </React.Fragment>
  )
}

const LoginLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
        <Component {...matchProps} />
      </LoginLayout>
    )} />
  )
};

export default LoginLayoutRoute
