import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Datatable from "./Datatable";
// const $DataTable = require('datatables.net-responsive');
import Helper from '../helper';

const AppDataTable = (props) => {
  const history = useHistory();

  // const tableEl = useRef(null);
  const { config } = props;
  const headings = []
  const datas = []



  useEffect(() => {
    Helper.initializeHoverCopy('.pCode');
  }, [])

  const tableConfig = [
    { responsivePriority: 1, targets: 0 },
    { responsivePriority: 10001, targets: 1 },
    { responsivePriority: 1, targets: 3 }
  ]

  for (const [index, value] of config.headings.entries()) {
    headings.push(<th key={index}>{value}</th>)
  }

  for (const [index, value] of config.data.entries()) {
    datas.push(
      <tr key={index} data-id={value.product_id}>
        <td></td>
        <td><img className="product-profile" src={value.profile} alt="" /></td>
        <td className="pCode" onClick={handleClick}>{value.product_code}</td>
        <td className="pCode" onClick={handleClick}>{value.product_title}</td>
        <td className="pCode" onClick={handleClick}>{value.price_a}</td>
        <td className="pCode" onClick={handleClick}>{value.price_b}</td>
        <td className="pCode" onClick={handleClick}>{value.price_c}</td>
        <td className="pCode" onClick={handleClick}>{value.retail_price}</td>
        <td className="pCode" onClick={handleClick}>{value.product_cost}</td>
      </tr>
    )
  }

  function handleClick (e) {
    Helper.copyToClipboard(e);
    if (!e.target.className.includes("fa fa-copy")) {
      const productId = e.target.parentElement.getAttribute('data-id')
      history.push(`/product/${productId}`)
    }
  }

  return (
    <Datatable headings={headings} config={tableConfig} datas={datas} />
  )
}

export default AppDataTable
