import React, { useEffect } from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom';
import DashboardLayout from './DashboardLayout'


const AuthenticatedRoute = ({ component: C, appProps, ...rest }) => {
  const history = useHistory();
  console.log({ appProps2: appProps })
  useEffect(() => {
    // console.log('onload')
    onLoad();
    return () => {
      // cleanup
    }
  })

  const onLoad = () => {
    try {
      let access_token = sessionStorage.getItem('access_token');
      let user = sessionStorage.getItem('user');
      console.log({ access_token, user })
      if (access_token) {
        console.log('logged in')
      } else {
        history.push('/login')
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <Route {...rest}
      render={
        props => (
          <DashboardLayout>
            <C {...props} {...appProps} />
          </DashboardLayout>
        )
      }
    />
  )
}

export default AuthenticatedRoute
