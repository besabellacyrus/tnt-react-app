import React from 'react'

const ProductDateOfferSpecial = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="form-wrap">
          <h6>Pre Order:</h6>
          <form action="#" className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-md-3">Start Date</label>
              <div className="col-md-9">
                <div className='input-group date' id='datetimepicker1'>
                  <input type='text' className="form-control" />
                  <span className="input-group-addon">
                    <span className="fa fa-calendar"></span>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-3">End Date</label>
              <div className="col-md-9">
                <div className='input-group date' id='datetimepicker5'>
                  <input type='text' className="form-control" />
                  <span className="input-group-addon">
                    <span className="fa fa-calendar"></span>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-3">Release Date</label>
              <div className="col-md-9">
                <div className='input-group date' id='datetimepicker6'>
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
      <div className="col-md-6">
        <div className="form-wrap">
          <h6>Special Offer:</h6>

          <form action="#" className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-md-3">Start Date</label>
              <div className="col-md-9">
                <div className='input-group date' id='datetimepicker7'>
                  <input type='text' className="form-control" />
                  <span className="input-group-addon">
                    <span className="fa fa-calendar"></span>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-md-3">End Date</label>
              <div className="col-md-9">
                <div className='input-group date' id='datetimepicker8'>
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

export default ProductDateOfferSpecial
