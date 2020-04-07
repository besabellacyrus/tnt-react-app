import React from 'react'
import Card from '../components/Card';
import ProductInventoryTable from "../components/ProductInventoryTable";
import TableExportButtons from "../components/TableExportButtons";

const ProductInventory = () => {
  const contentLeft = ""
  const contentRight = (
    <div className="row">
      <div className="col-sm-12">
        <div className="product-table-actions pull-right mt-10 mb-10">
          <TableExportButtons />
        </div>
      </div>
    </div>
  )

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
