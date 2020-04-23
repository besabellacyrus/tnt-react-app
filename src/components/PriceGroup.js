import React from 'react'

const PriceGroup = (props) => {

  const toLetters = (num) => {
    switch (num) {
      case 1:
        return 'B';
        break;
      case 2:
        return 'C';
        break;
      default:
        return 'A';
        break;
    }
  }

  return (
    <React.Fragment>
      <div className="row mb-10">
        <div className="col-sm-12">
          <div className="form-group">
            <div className="col-sm-2 pp-label">
              <label>Price {toLetters(props.index)} </label>
            </div>
            <div className="col-sm-9">
              <input type="text" className="form-control" />
            </div>
            <div className="col-sm-1 pp-label plus-sign">
              <i className="fa fa-plus" onClick={props.addPriceGroup}></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {props.index >= 1 ? <i className="fa fa-close" onClick={props.removePriceGroup}></i> : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-10">
        <div className="col-sm-12">
          <div className="col-sm-6">
            <div className="form-group">
              <div className="row">
                <div className="col-sm-4 pp-label">
                  <label>Retail Price</label>
                </div>
                <div className="col-sm-8">
                  <div class="input-group mb-15">
                    <input type="text" name="example-input1-group3" class="form-control" placeholder="0" />
                    <div class="input-group-btn">
                      <button type="button" class="btn app-btn btn-primary dropdown-toggle" data-toggle="dropdown">SGD</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <div className="row">
                <div className="col-sm-2 pp-label">
                  <label>Wholesale</label>
                </div>
                <div className="col-sm-8">
                  <div class="input-group mb-15">
                    <input type="text" name="example-input1-group3" class="form-control" placeholder="" />
                    <div class="input-group-btn">
                      <button type="button" class="btn app-btn btn-primary dropdown-toggle" data-toggle="dropdown">SGD</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group">
              <div className="row">
                <div className="col-sm-4 pp-label">
                  <label>Pre Order Price</label>
                </div>
                <div className="col-sm-8">
                  <div class="input-group mb-15">
                    <input type="text" name="example-input1-group3" class="form-control" placeholder="0" />
                    <div class="input-group-btn">
                      <button type="button" class="btn app-btn btn-primary dropdown-toggle" data-toggle="dropdown">SGD</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <div className="row">
                <div className="col-sm-2 pp-label">
                  <label></label>
                </div>
                <div className="col-sm-8">
                  <div class="input-group mb-15">
                    <input type="text" name="example-input1-group3" class="form-control" placeholder="" />
                    <div class="input-group-btn">
                      <button type="button" class="btn app-btn btn-primary dropdown-toggle" data-toggle="dropdown">RMB</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group">
              <div className="row">
                <div className="col-sm-4 pp-label">
                  <label>Special Offer</label>
                </div>
                <div className="col-sm-8">
                  <div class="input-group mb-15">
                    <input type="text" name="example-input1-group3" class="form-control" placeholder="0" />
                    <div class="input-group-btn">
                      <button type="button" class="btn app-btn btn-primary dropdown-toggle" data-toggle="dropdown">SGD</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group">
              <div className="row">
                <div className="col-sm-2 pp-label">
                  <label></label>
                </div>
                <div className="col-sm-8">
                  <div class="input-group mb-15">
                    <input type="text" name="example-input1-group3" class="form-control" placeholder="" />
                    <div class="input-group-btn">
                      <button type="button" class="btn app-btn btn-primary dropdown-toggle" data-toggle="dropdown">USD</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="form-group">
              <div className="row">
                <div className="col-sm-4 pp-label">
                  <label>Deposit Price</label>
                </div>
                <div className="col-sm-8">
                  <div class="input-group mb-15">
                    <input type="text" name="example-input1-group3" class="form-control" placeholder="0" />
                    <div class="input-group-btn">
                      <button type="button" class="btn app-btn btn-primary dropdown-toggle" data-toggle="dropdown">SGD</button>
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

export default PriceGroup