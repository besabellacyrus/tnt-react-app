import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import NavigationWithBack from './NavigationWithBack';

const ProductNav = (props) => {
  const history = useHistory();

  const handleBackBtn = () => {
    history.push('/products')
  }

  const handleNavChange = () => {
    // console.log('navchange')
    console.log({ href: window.location.href.split('/')[3] })
    if (window.location.href.split('/')[3] !== 'add-product') {
      history.push('add-product-media');
    } else {
      props.pushSave();
    }
  }

  const handleNavProdInfo = () => {
    console.log({ url: window.location.href.split('/')[3] })
  }

  const isTabActive = (path) => {
    console.log({ ssss: Array.isArray(path) })
    if (Array.isArray(path)) {
      const paths = path.filter(e => e === window.location.href.split('/')[3])
      console.log({ paths })
      if (paths.length > 0) {
        return 'app-btn-active';
      }
      return 'app-btn-not-active'
    } else {
      return window.location.href.split('/')[3] === path ? 'app-btn-active' : 'app-btn-not-active';
    }
  }

  return (
    <React.Fragment>
      <NavigationWithBack title="Products" />
      <div className="row">
        <div className="col-md-12">
          <div className="product-tab-wrapper">
            <button onClick={handleNavProdInfo} className={`btn app-btn ${isTabActive(['product', 'add-product'])}`}>
              <span>Product Information</span>
            </button>
            <button onClick={handleNavChange} className="btn app-btn app-btn-not-active">
              <span>Product Media</span>
            </button>
            <button onClick={handleNavChange} className="btn app-btn app-btn-not-active">
              <span>Product Price</span>
            </button>
            <button onClick={handleNavChange} className="btn app-btn app-btn-not-active">
              <span>Product Supplier</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductNav
