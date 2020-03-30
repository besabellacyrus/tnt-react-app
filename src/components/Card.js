import React from 'react'

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="app-module-title">
        <h6 className="panel-title txt-dark">{props.title}</h6>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default card-view">
            <div className="panel-heading">
              <div className="pull-left">
                <h6 className="panel-title txt-dark">{props.subTitle}</h6>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="panel-wrapper collapse in">
              <div className="panel-body">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card
