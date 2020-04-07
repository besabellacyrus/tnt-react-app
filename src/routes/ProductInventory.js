import React from 'react'
import Card from '../components/Card';
import ProductInventoryTable from "../components/ProductInventoryTable";

const ProductInventory = () => {
  const contentLeft = ""
  const contentRight = ""

  return (
    <React.Fragment>
      <Card title="Products" subTitle="Inventory" contentLeft={contentLeft} contentRight={contentRight}>
        <div className="table-wrap">
          <ProductInventoryTable />
        </div>
      </Card >
    </React.Fragment>
  )
}

export default ProductInventory
