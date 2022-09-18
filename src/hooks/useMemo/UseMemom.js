import React,{isValidElement, useMemo, useState} from 'react'

function UseMemom() {
    const [count ,setCount]=useState(0)
    const [countTwo ,setCountTwo]=useState(0)

    const increment=()=>{
        setCount(count+1)
    }
    const incrementTwo=()=>{
        setCountTwo(countTwo+1)
    }
    const isEven=useMemo(()=>{
      let i=0
      while(i<200000000) i++;
      return (count%2===0) ?'even' : 'odd'
    },[count])
  return (
    <div>
      <button onClick={increment} >incrment {count}</button>
      <p> {isEven} </p>
      <button onClick={incrementTwo} >incrment {countTwo}</button>
    </div>
  )
}

export default UseMemom
