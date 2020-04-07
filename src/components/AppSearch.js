import React from 'react';


const AppSearch = (props) => {
  const searchables = props.searchables;
  let searchableUi = []

  searchables.forEach((el, index) => {
    searchableUi.push(
      <li>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={`checked_${index}`} value={index} name="search-checkbox" checked />
          <label className="custom-control-label" for={`checked_${index}`}>{el}</label>
        </div>
      </li>
    )
  });

  return (
    <React.Fragment>
      <div className="input-group">
        <input type="text" className="form-control search-datatable" placeholder="Search" />
        <div className="input-group-btn">
          <button type="button" className="btn btn-primary"><span className="fooicon fooicon-search"></span></button>
          <button type="button" className="btn btn-default btn-search dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></button>
          <ul id="checkbox-ul" className="datatable-dropdown dropdown-menu dropdown-menu-right">
            {searchableUi}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AppSearch
