import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Helper from "../helper";

const AppTable = (props) => {
  const history = useHistory();
  const [headers, setHeaders] = useState([]);

  const uiHeaders = [];
  const uiRows = [];
  let deleteItems = [];

  useEffect(() => {
    console.log({ props })
    setHeaders([
      'Profile',
      'Product Code',
      'Product Title',
      'Price A',
      'Price B',
      'Price C',
      'Retail Price',
      'Product Cost'
    ])
  }, [])

  useEffect(() => {
    Helper.initializeHoverCopy('.pCode');
  })


  const handleCheckChange = (event) => {
    console.log({ changecheck: event.target.checked})
    let checkboxs = document.querySelectorAll('.details-control');
    checkboxs.forEach(e => {
        deletePusher(e.parentNode.parentNode.getAttribute('data-id'))
      e.checked = event.target.checked;
    })
    console.log({deleteItems})
    props.delItems(deleteItems);
  }

  const deletePusher = (trId) => {
    deleteItems.indexOf(trId) === -1 ? deleteItems.push(trId) : deleteItems.splice(deleteItems.indexOf(trId), 1);
  }

  const handleClickRow = (event) => {
    try {
      const trId = event.target.parentNode.parentNode.getAttribute('data-id')

      deleteItems.indexOf(trId) === -1 ? deleteItems.push(trId) : deleteItems.splice(deleteItems.indexOf(trId), 1);
      props.delItems(deleteItems);

      if (event.target.id !== 'hover-copy' && event.target.className !== 'details-control') {
        const productId = event.target.parentNode.getAttribute('data-id');
        history.push(`/product/${productId}`)
      }
    } catch (error) {
      console.log({ error })
    }
  }

  try {
    if (props.data.data) {
      props.data.data.forEach(e => {
        uiRows.push(
          <tr data-id={e.id} key={e.id} onClick={handleClickRow}>
            <td><input type="checkbox" className="details-control" /></td>
            <td>
              <div className="table-image-profile">
                <img src={e.profile} />
              </div>
            </td>
            <td className="pCode">{e.product_code}</td>
            <td className="pCode">{e.product_title}</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
        )
      })
    }
  } catch (error) {
    console.log({ error })
  }

  headers.forEach(e => {
    uiHeaders.push(
    <th key={e}>{e}</th>
    )
  })



  return (
    <table className="table table-hover display mt-20" width="100%">
      <thead>
        <tr>
          <th><input type="checkbox" onChange={handleCheckChange} className="kt-group-checkable" /></th>
           { uiHeaders }
        </tr>
      </thead>
      <tbody>
        { uiRows }
      </tbody>
    </table>
  )
}

export default AppTable
