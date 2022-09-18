import React,{useState} from 'react'

function HooksUseState() {
  const [count,setCount]=useState(0)
  const incrementFive=()=>{
    for(let i=0;i<5;i++){
      setCount(prev=>prev+1)
    }
  }
  return (
    <div>
      count :{count} <br />
      <button onClick={()=>setCount(0)}>reset</button>
      <button onClick={()=>setCount(prev=>prev+1)}>increment</button>
      <button onClick={()=>setCount(prev=>prev-1)}>decrement</button>
      <button onClick={()=>incrementFive()} >increment 5</button>
    </div>
  )
}

export default HooksUseState

