import React from 'react'
import featuredProducts from '../test/schedules.json';
import DateRangePicker from './DateRangePicker';
import Switch from 'react-switchery';
import { useHistory } from 'react-router-dom';
import Datatable from "../components/Datatable";
import $ from 'jquery';


const config = {
  headings: [
    'Default Featured',
    'In-Stock',
    'Enable',
  ],
  data: featuredProducts
}

const FeaturedProductList = (props) => {
  const history = useHistory();
  const headings = []
  const datas = []

  for (const [index, value] of config.headings.entries()) {
    headings.push(<th key={index}>{value}</th>)
  }

  for (const [index, value] of config.data.entries()) {
    datas.push(
      <tr onClick={handleClick} key={index} data-id={value.schedule_id}>
        <td></td>
        <td>
          <div className="col-sm-6">
            <DateRangePicker schedule={value.default_featured} />
          </div>
        </td>
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
    if (!e.target.className.includes("sorting_1")) {
      const schedId = e.target.parentElement.getAttribute('data-id')
      history.push(`/schedule/${schedId}`)
    }
  }

  function handleHover (e) {
    console.log(e)
  }


  return (
    <Datatable headings={headings} datas={datas} />
  )
}

export default FeaturedProductList
