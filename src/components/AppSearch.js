import React from 'react'

const AppSearch = (props) => {
  return (
    <React.Fragment>
      <div className="form-group">
        <div class="input-group mb-15">
          <input type="text" id="example-input2-group3" name="example-input2-group3" class="form-control" placeholder="Search" />
          <div class="input-group-btn">
            <button type="button" class="btn app-search-dropdown dropdown-toggle" data-toggle="dropdown">PRODUCT TITLE<span class="caret"></span></button>
            <ul class="dropdown-menu dropdown-menu-right">
              <li><a href="javascript:void(0)">PRODUCT TITLE</a></li>
              {/* <li><a href="javascript:void(0)">Another action</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AppSearch
