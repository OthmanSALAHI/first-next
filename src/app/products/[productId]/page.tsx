import React from 'react'

interface ProductDetailsProps {
    params: {
        productId: string
    }
}

function ProductDetails({params}: ProductDetailsProps) {
  return (
    <div>ProductDetails {params.productId}</div>
  )
}

export default ProductDetails