import React from 'react'
import  ReactDOM  from 'react-dom'
function portalRoot() {
  return ReactDOM.createPortal(
    <>
      <h2>portal root</h2>
    </>
    ,document.getElementById('portalRoot')
  )
}

export default portalRoot
