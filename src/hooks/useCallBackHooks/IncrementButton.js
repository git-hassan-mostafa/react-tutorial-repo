import React from 'react'

function IncrementButton({increment,value}) {
    console.log('button component',value)
  return (
    <div>
      <button onClick={increment} > {value} </button>
    </div>
  )
}

export default React.memo(IncrementButton) 
