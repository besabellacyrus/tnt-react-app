import React from 'react'
import '../../styles/scss/modal.scss'

const ImageUploadModal = ({ handleClose, show, children, close }) => {

  console.log({ show })

  const showHideClassName = show ? "app-modal d-block" : "app-modal d-none";
  return (
    <div className="modal-overlay">
      <div className={showHideClassName}>
        <div className="app-modal-container row">
          <div className="app-modal-header">
            <span>Upload Images</span>
            <span className="pull-right" onClick={close}><i className="fa fa-close"></i></span>
          </div>
          <div className="col-sm-12">
          </div>
          <div className="col-sm-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageUploadModal
