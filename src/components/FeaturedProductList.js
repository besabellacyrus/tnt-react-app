import React, { useEffect } from 'react'
import featuredProducts from '../test/schedules.json';
import DateRangePicker from './DateRangePicker';
import $ from 'jquery';
import Switch from 'react-switchery';


const config = {
  headings: [
    'Default Featured',
    'In-Stock',
    'Enable',
  ],
  data: featuredProducts
}




const FeaturedProductList = (props) => {

  const headings = []
  const datas = []

  for (const [index, value] of config.headings.entries()) {
    headings.push(<th key={index}>{value}</th>)
  }

  for (const [index, value] of config.data.entries()) {
    datas.push(
      <tr onClick={handleClick} key={index} data-id={value.product_id}>
        <td><DateRangePicker schedule={value.default_featured} /></td>
        <td>{value.in_stock}</td>
        <td>
          <Switch
            className="switch-class"
            options={
              {
                color: '#2ecd99',
                size: 'small'
              }
            }
            checked={value.is_enabled}
          />
        </td>
      </tr>
    )
  }

  function handleClick (e) {
    console.log('classname', e.target.className)
    if (e.target.className !== ' select-checkbox') {
      // history.push("/product/222")
      const productId = e.target.parentElement.getAttribute('data-id')
      console.log({ props })
      // history.push(`/product/${productId}`)
    }
  }

  function handleHover (e) {
    console.log(e)
  }

  useEffect(() => {
    $('#featured-product-table').DataTable({
      searching: false,
      responsive: true
    });
  }, [])

  return (
    <table id="featured-product-table" className="table display responsive nowrap pb-30">
      <thead>
        <tr>
          {headings}
        </tr>
      </thead>
      <tbody>
        {datas}
      </tbody>
    </table>
  )
}

export default FeaturedProductList
