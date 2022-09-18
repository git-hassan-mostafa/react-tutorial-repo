import React,{useState,useEffect} from 'react'
import MouseOver from './useEffectOnce'

function EffectUnmount() {
    const [display,setDisplay]=useState(true)

  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>toggle</button>
        {display && <MouseOver />}
    </div>
  )
}

export default EffectUnmount
