import React from 'react'

export default function Search () {
  return (
    <form className="form-inline">
      <div className="form-group"><label className="sr-only">Search</label>
        <div className="input-group"><input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-btn"><button type="button" className="btn btn-primary"><span
            className="fooicon fooicon-search"></span></button><button type="button"
              className="btn btn-default dropdown-toggle"><span className="caret"></span></button>
            <ul className="dropdown-menu dropdown-menu-right">
              <li><a className="checkbox"><label><input type="checkbox" checked="checked" />ID</label></a></li>
              <li><a className="checkbox"><label><input type="checkbox" checked="checked" />First Name</label></a></li>
              <li><a className="checkbox"><label><input type="checkbox" checked="checked" />Last Name</label></a></li>
              <li><a className="checkbox"><label><input type="checkbox" checked="checked" />Job Title</label></a></li>
              <li><a className="checkbox"><label><input type="checkbox" checked="checked" />Started On</label></a></li>
              <li><a className="checkbox"><label><input type="checkbox" checked="checked" />Date of Birth</label></a></li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  )
}
