import React from 'react'

function Page({params}: {params: {featureId: string, conceptId: string}}) {
  return (
    <div>
        docs for {params.featureId} {params.conceptId}
    </div>
  )
}

export default Page