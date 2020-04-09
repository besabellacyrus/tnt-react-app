import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './routes/Login';

const Public = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
    </Router>
  )
}

export default Public
