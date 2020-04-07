import React from 'react'
import { useHistory } from 'react-router-dom';

const NavigationWithBack = (props) => {
  const history = useHistory();

  const handleBackBtn = () => {
    history.goBack();
  }
  return (
    <div className="row product-nav-head">
      <div className="col-xs-9">
        <h6>{props.title}</h6>
      </div>
      <div className="col-xs-3">
        <button className="pull-right btn app-btn btn-danger" onClick={handleBackBtn}>Back</button>
      </div>
    </div>
  )
}

export default NavigationWithBack
