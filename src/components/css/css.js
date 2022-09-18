import React from 'react'
import  './style.css'
import Modules from './style.module.css'

// 
function css() {
    const Style={
    fontSize:'50px',
    color:'orange',
    backgroundColor:'black'

}
  return (
    <div>
        {/* css stylesheet  */}
      <h2 className={'coloring'}>hassan</h2>

      {/* inline styling  */}
      <h3 style={Style}>mostafa</h3>
      
      {/* module stylesheet wich is local scope and could be used
      in all the components child */}
      <h2 className={Modules.warning}>hello</h2>
    </div>
  )
}

export default css
