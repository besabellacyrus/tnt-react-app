import React from 'react'

const Product = (props) => {
  const { match: { params } } = props;
  console.log({ params: params.productId })
  return (
    <div>
      <h1>Single page</h1>
    </div>
  )
}

export default Product
