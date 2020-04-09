import React from 'react'
import WeirdComponent from './components/WeirdComponent';

const LoginLayout = ({ children, ...rest }) => {
  return (
    <React.Fragment>
      <WeirdComponent />
      <div className="wrapper pa-0">
        <header className="sp-header">
          <div className="sp-logo-wrap pull-left">
            <a href="index.html">
              <img className="brand-img mr-10" src="/img/simplifycool-icon.svg" alt="brand" />
              <span className="brand-text">Simplify.Cool</span>
            </a>
          </div>
          <div className="form-group mb-0 pull-right">
            <span className="inline-block pr-10">Don't have an account?</span>
            <a className="inline-block btn btn-info btn-success btn-rounded btn-outline" href="signup.html">Sign Up</a>
          </div>
          <div className="clearfix"></div>
        </header>
        {children}
      </div>
    </React.Fragment>
  )
}

export default LoginLayout
