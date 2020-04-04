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
              <h6 className="panel-title panel-subtitle txt-dark">{props.subTitle}</h6>
              <div className="row card-row-reverse">
                <div className="col-sm-5">
                  {props.contentLeft}
                </div>
                <div className="col-sm-7">
                  {props.contentRight}
                </div>
              </div>
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
