import React from 'react'

function SamplePage (props) {

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ event })
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  )
}

export default SamplePage
