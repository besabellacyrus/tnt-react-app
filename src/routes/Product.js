import React from 'react'
import Card from '../components/Card';

const Product = (props) => {
  const { match: { params } } = props;
  console.log({ params: params.productId })
  return (
    <Card title="Products" subTitle="Product Information">
    </Card>
  )
}

export default Product
