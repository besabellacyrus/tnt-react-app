import React, { useEffect, useState } from 'react'

const SelectType = (props) => {
  const [selected, setSeleced] = useState('none');

  const handleChange = (e) => {
    console.log({ e })
    props.handleSelect({ type: e.target.value, index: props.typeIndex });
    setSeleced(e.target.value);
  }

  useEffect(() => {
    setSeleced(props.selected);
  }, []);

  return (
    <React.Fragment>
      <div className="modal-select-wrapper">
        <select value={selected} className="image-type-select" onChange={handleChange}>
          <option value="none">None</option>
          <option value="thumbnail">Set as Thumbnail</option>
          <option value="banner">Set as Banner</option>
          <option value="display">Set Display</option>
          <option value="3" disabled>Crop Thumbnail</option>
          <option value="4" disabled>Free Crop</option>
        </select>
        <i className="fa fa-ellipsis-v pull-right mr-5"></i>
      </div>
    </React.Fragment>
  )
}

export default SelectType
