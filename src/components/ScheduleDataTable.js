import React from 'react'
import schedules from '../test/addSchedules.json';
import Datatable from './Datatable';
import Switch from 'react-switchery';

const ScheduleDataTable = (props) => {
  const headings = []
  const datas = []

  const config = {
    headings: [
      'Profile',
      'Product Code',
      'Product Title',
      'Featured',
      'Home Featured',
      'Ranking'
    ],
    data: schedules
  }

  for (const [index, value] of config.headings.entries()) {
    headings.push(<th key={index}>{value}</th>)
  }

  for (const [index, value] of config.data.entries()) {
    datas.push(
      <tr onClick={handleClick} key={index} data-id={value.product_id}>
        <td></td>
        <td><img className="product-profile" src={value.profile} alt={value.product_title} /></td>
        <td>{value.product_code}</td>
        <td>{value.product_title}</td>
        <td>
          <Switch
            className="switch-class"
            options={
              {
                color: '#2ecd99',
                size: 'small'
              }
            }
            checked={value.featured}
          />
        </td>
        <td><Switch
          className="switch-class"
          options={
            {
              color: '#2ecd99',
              size: 'small'
            }
          }
          checked={value.home_featured}
        /></td>
        <td>
          <select value={value.ranking}>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="any">Any</option>
          </select>
        </td>
      </tr>
    )
  }

  function handleClick (e) {
    console.log(e.target.className)
    if (e.target.className.includes("sorting_1")) {
      const productId = e.target.parentElement.getAttribute('data-id')
      // history.push(`/product/${productId}`)
    }
  }

  return (
    <div>
      <Datatable headings={headings} datas={datas} />
    </div>
  )
}

export default ScheduleDataTable
