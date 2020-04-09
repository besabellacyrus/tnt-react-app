import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useSignUpForm from '../CustomHooks';
import axios from 'axios';

const Login = (props) => {
  const [loading, setloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const signIn = () => {
    const user = {
      email: inputs.email,
      password: inputs.password
    };

    setloading(true);
    setErrorMessage('');

    axios.post(`http://toyntoys-api.test/api/login`, { ...user })
      .then(res => {
        console.log({ res });
        if (res.data.access_token) {
          setloading(false);
          history.push('/dashboard')
        }
        if (res.data.message) {
          setloading(false);
          setErrorMessage(res.data.message)
        }
      }).catch(e => {
        setErrorMessage('Something went wrong.')
        setloading(false);
      })
  }
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signIn);

  return (
    <React.Fragment>
      <div className="page-wrapper pa-0 ma-0 auth-page">
        <div className="container-fluid">
          <div className="table-struct full-width full-height">
            <div className="table-cell vertical-align-middle auth-form-wrap">
              <div className="auth-form  ml-auto mr-auto no-float">
                <div className="row">
                  <div className="col-sm-12 col-xs-12">
                    <div className="mb-30">
                      <h3 className="text-center txt-dark mb-10">Sign in to Simplify.Cool</h3>
                      <h6 className="text-center nonecase-font txt-grey">Enter your details below</h6>
                    </div>
                    <div className="form-wrap">
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label className="control-label mb-10" htmlFor="exampleInputEmail_2">Email / Username</label>
                          <input type="email" className="form-control" required={true} onChange={handleInputChange} name="email" id="exampleInputEmail_2" placeholder="Enter email / Username" />
                        </div>
                        <div className="form-group">
                          <label className="pull-left control-label mb-10" htmlFor="exampleInputpwd_2">Password</label>
                          <div className="clearfix"></div>
                          <input type="password" className="form-control" required={true} onChange={handleInputChange} name="password" id="exampleInputpwd_2" placeholder="Enter pwd" />
                        </div>
                        <div className="form-group">
                          <div className="checkbox checkbox-primary pr-10 pull-left">
                            <input id="checkbox_2" required="" type="checkbox" />
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <div className="form-group text-center">
                          <button type="submit" className="btn btn-info btn-primary btn-rounded">{loading ? 'Please wait...' : 'Sign In'}</button>
                        </div>
                        <div className="clearfix"></div>
                        <p className="text-center" >{errorMessage ? errorMessage : ''}</p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
