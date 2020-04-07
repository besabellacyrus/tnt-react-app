import React, { useEffect } from 'react'
import featuredProducts from '../test/schedules.json';
import DateRangePicker from './DateRangePicker';
import Switch from 'react-switchery';
import { useHistory } from 'react-router-dom';
import Datatable from "../components/Datatable";
import Helper from '../helper';

const config = {
  headings: [
    'Featured Title',
    'Featured Schedule',
    'In-Stock',
    'Pre-Order',
    'Out Of Stock',
    'Enable',
  ],
  data: featuredProducts
}

const FeaturedProductList = (props) => {
  const history = useHistory();
  const headings = []
  const datas = []

  const tableConfig = [
    { responsivePriority: 1, targets: 0 },
    { responsivePriority: 1, targets: 1 },
    { responsivePriority: 5, targets: 2 },
    { responsivePriority: 2, targets: 3 },
    { responsivePriority: 1, targets: 4 }
  ]

  useEffect(() => {
    Helper.initializeHoverCopy('.pCode');
  }, [])

  for (const [index, value] of config.headings.entries()) {
    headings.push(<th key={index}>{value}</th>)
  }

  for (const [index, value] of config.data.entries()) {
    datas.push(
      <tr key={index} data-id={value.schedule_id}>
        <td></td>
        <td onClick={handleClick} className="pCode">{value.feature_title}</td>
        <td>
          <div className="col-sm-8">
            <DateRangePicker schedule={value.default_featured} />
          </div>
        </td>
        <td className="pCode" onClick={handleClick} >{value.in_stock}</td>
        <td className="pCode" onClick={handleClick} >{value.pre_order}</td>
        <td className="pCode" onClick={handleClick} >{value.out_of_stock}</td>
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
    Helper.copyToClipboard(e);

    if (!e.target.className.includes("fa fa-copy")) {
      const schedId = e.target.parentElement.getAttribute('data-id')
      history.push(`/schedule/${schedId}`)
    }
  }

  return (
    <Datatable headings={headings} config={tableConfig} datas={datas} />
  )
}

export default FeaturedProductList
