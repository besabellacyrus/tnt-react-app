import React from 'react'
import { useHistory } from "react-router-dom";
import Datatable from "../components/Datatable";
// const $DataTable = require('datatables.net-responsive');

const AppDataTable = (props) => {
  const history = useHistory();

  // const tableEl = useRef(null);
  const { config } = props;
  const headings = []
  const datas = []

  for (const [index, value] of config.headings.entries()) {
    headings.push(<th key={index}>{value}</th>)
  }

  for (const [index, value] of config.data.entries()) {
    datas.push(
      <tr onClick={handleClick} key={index} data-id={value.product_id}>
        <td><img className="product-profile" src={value.profile} /></td>
        <td onMouseEnter={handleHover}>{value.product_code}</td>
        <td onMouseEnter={handleHover}>{value.product_title}</td>
        <td>{value.price_a}</td>
        <td>{value.price_b}</td>
        <td>{value.price_c}</td>
        <td>{value.retail_price}</td>
        <td>{value.product_cost}</td>
      </tr>
    )
  }

  function handleClick (e) {
    console.log({ weeee: e.target.className })
    if (!e.target.className.includes("sorting_1")) {
      const productId = e.target.parentElement.getAttribute('data-id')
      history.push(`/product/${productId}`)
    }
  }

  function handleHover (e) {
    console.log(e)
  }

  return (
    <Datatable headings={headings} datas={datas} />
  )
}

export default AppDataTable
