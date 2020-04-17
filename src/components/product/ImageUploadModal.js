import React from 'react'
import '../../styles/scss/modal.scss'

const ImageUploadModal = ({ handleClose, show, children }) => {

  console.log({ show })

  const showHideClassName = show ? "app-modal d-block" : "app-modal d-none";
  return (
    <div className="modal-overlay">
      <div className={showHideClassName}>
        <div className="app-modal-container">
          {children}

        </div>
      </div>
    </div>
  )
}

export default ImageUploadModal
