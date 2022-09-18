import React from 'react'

const FRChild=React.forwardRef((props,ref)=> {
  return (
    <>
      <input ref={ref} />
    </>
  )
})

export default FRChild

