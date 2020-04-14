import React from 'react'

const ProductDateInfo = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="form-wrap">
          <form action="#" className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-md-3">Date Created</label>
              <div className="col-md-9">
                <div className='input-group date' id='datetimepicker9'>
                  <input type='text' className="form-control" />
                  <span className="input-group-addon">
                    <span className="fa fa-calendar"></span>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-3">Last Update</label>
              <div className="col-md-9">
                <div className='input-group date' id='datetimepicker0'>
                  <input type='text' className="form-control" />
                  <span className="input-group-addon">
                    <span className="fa fa-calendar"></span>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductDateInfo
