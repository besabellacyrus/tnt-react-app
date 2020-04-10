import React from 'react'

function Dashboard (props) {

  return (
    <React.Fragment>
      <h6 className="panel-title txt-dark">Items and Inventory Dashboard</h6>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div className="panel panel-default card-view pa-0">
            <div className="panel-wrapper collapse in">
              <div className="panel-body pa-0">
                <div className="sm-data-box">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-6 text-center pl-0 pr-0 data-wrap-left">
                        <span className="txt-dark block counter"><span className="counter-anim">914,001</span></span>
                        <span className="weight-500 uppercase-font block font-13">visits</span>
                      </div>
                      <div className="col-xs-6 text-center  pl-0 pr-0 data-wrap-right">
                        <i className="icon-user-following data-right-rep-icon txt-light-grey"></i>
                      </div>
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

export default Dashboard
