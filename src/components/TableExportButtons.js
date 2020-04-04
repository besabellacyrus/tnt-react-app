import React from 'react'

const TableExportButtons = () => {
  return (
    <React.Fragment>
      <button className="btn app-btn app-btn-gray">Copy Table</button>
      <button className="btn app-btn app-btn-gray">CSV</button>
      <button className="btn app-btn app-btn-gray">Excel</button>
      <button className="btn app-btn app-btn-gray">PDF</button>
      <button className="btn app-btn app-btn-gray">Print</button>
    </React.Fragment>
  )
}

export default TableExportButtons
