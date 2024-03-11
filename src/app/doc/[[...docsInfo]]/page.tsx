import React from 'react'

function Doc({params}: {params :{ docsInfo?: string[] }}) {
    if (params.docsInfo?.length === 1) {
        return <div>docs for feature {params.docsInfo[0]}</div>
    }else if (params.docsInfo?.length === 2) {
        return <div>docs for concept {params.docsInfo[1]} of feature {params.docsInfo[0]}</div>
    }
  return (
    <div>
        nothing
    </div>
  )
}

export default Doc