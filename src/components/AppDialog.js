import React, { useState, useEffect } from 'react';
import '../styles/components/AppDialog.scss';

const AppDialog = (props) => {

  return (
    <div className="app-dialog">
      {props.children}
    </div>
  )
}

export default AppDialog
