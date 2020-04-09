import React from 'react'
import auth from '../Auth';
import { useHistory } from 'react-router-dom';


const Login = (props) => {
  const history = useHistory();

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => {
        auth.login(() => {
          history.push('/dashboard');
        })
      }}
      >
        Login
      </button>
    </div>
  )
}

export default Login
