import React from 'react'

// methods as props 
function childCompo(props) {
  return (
    <div>
      <button onClick={()=> props.greethandler('hassan')}>click me</button>
    </div>
  )
}

export default childCompo
