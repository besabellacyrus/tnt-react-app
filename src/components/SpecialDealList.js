import React, { useEffect } from 'react'
import specialDeals from '../test/specialDeals.json';
import DateRangePicker from './DateRangePicker';
import Switch from 'react-switchery';
import { useHistory } from 'react-router-dom';
import Datatable from "../components/Datatable";
import Helper from "../helper";

const config = {
  headings: [
    'Featured Title',
    'Default Featured',
    'In-Stock',
    'Pre-Order',
    'Out Of Stock',
    'Enable',
    'Background Photo'
  ],
  data: specialDeals
}

const tableConfig = [
  { responsivePriority: 1, targets: 0 },
  { responsivePriority: 10001, targets: 1 },
  { responsivePriority: 1, targets: 3 }
]

const SpecialDealList = (props) => {
  const history = useHistory();
  const headings = []
  const datas = []

  useEffect(() => {
    Helper.initializeHoverCopy('.pCode');
  }, [])

  for (const [index, value] of config.headings.entries()) {
    headings.push(<th key={index}>{value}</th>)
  }

  for (const [index, value] of config.data.entries()) {
    datas.push(
      <tr key={index} data-id={value.deal_id}>
        <td></td>
        <td onClick={handleClick} className="pCode">{value.feature_title}</td>
        <td>
          <DateRangePicker schedule={value.default_featured} />
        </td>
        <td onClick={handleClick}>{value.in_stock}</td>
        <td onClick={handleClick}>{value.pre_order}</td>
        <td onClick={handleClick}>{value.out_of_stock}</td>
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
    Helper.copyToClipboard(e);
    if (!e.target.className.includes("fa fa-copy")) {
      const dealId = e.target.parentElement.getAttribute('data-id')
      history.push(`/special-deal/${dealId}`)
    }
  }

  return (
    <Datatable headings={headings} config={tableConfig} datas={datas} />
  )
}

export default SpecialDealList
