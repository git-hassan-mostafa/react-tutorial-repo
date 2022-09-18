import React, { useState } from 'react'

const Filter = ({column}) => {
  const {filterValue,setFilter}=column
  return (
    <div>
      <input type="text" value={filterValue || ''}
      onChange={e=>setFilter(e.target.value)}
      />
    </div>
  )
}

export default Filter

