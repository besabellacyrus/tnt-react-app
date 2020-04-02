import React from 'react'
import specialDeals from '../test/specialDeals.json';
import DateRangePicker from './DateRangePicker';
import Switch from 'react-switchery';
import { useHistory } from 'react-router-dom';
import Datatable from "../components/Datatable";


const config = {
  headings: [
    'Default Featured',
    'In-Stock',
    'Enable',
    'Background Photo'
  ],
  data: specialDeals
}

const SpecialDealList = (props) => {
  const history = useHistory();
  const headings = []
  const datas = []

  for (const [index, value] of config.headings.entries()) {
    headings.push(<th key={index}>{value}</th>)
  }

  for (const [index, value] of config.data.entries()) {
    datas.push(
      <tr onClick={handleClick} key={index} data-id={value.deal_id}>
        <td></td>
        <td>
          <DateRangePicker schedule={value.default_featured} />
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
        <td>
          <div className="list-bg-photo-wrapper">
            <img src={value.background_photo} alt="background photo" />
          </div>
        </td>
      </tr>
    )
  }

  function handleClick (e) {
    console.log({ click: e.target.className })
    if (e.target.className === "") {
      const dealId = e.target.parentElement.getAttribute('data-id')
      history.push(`/special-deal/${dealId}`)
    }
  }

  function handleHover (e) {
    console.log(e)
  }


  return (
    <Datatable headings={headings} datas={datas} />
  )
}

export default SpecialDealList
