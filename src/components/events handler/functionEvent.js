import React from 'react'
// event handler in function 
function functionEvent() {
    function clicked(){
        console.log('clicked function');
    }
  return (
    <div>
      <button onClick={clicked} >click me function</button>
    </div>
  )
}

export default functionEvent
