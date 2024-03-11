import React from 'react';
import { notFound } from 'next/navigation';

function ReviewDetails({params,}: {params: {reviewId: string, productId: string}}) {
  if (parseInt(params.reviewId) > 40) {
    return notFound();
  }
  return (
    <div>
        review for product {params.productId} details id {params.reviewId}
    </div>
  )
}

export default ReviewDetails