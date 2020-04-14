import React from 'react'
import ProductMedia from '../routes/ProductMedia';
import ProductNav from '../components/ProductNav';

const AddProductMedia = () => {
  return (
    <React.Fragment>
      <ProductNav />
      <div className="mt-20">
        <div className="content-wrapper">
          <ProductMedia />
        </div>
        <div className="pull-right">
          <button className="btn app-btn btn-primary">Preview</button>
          <button form='first-part-form' type="submit" className="btn app-btn btn-primary">Save</button>
          <button className="btn app-btn btn-danger">Cancel</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddProductMedia
