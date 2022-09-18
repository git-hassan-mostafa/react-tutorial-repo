import React, { useEffect, useRef, useState } from 'react'

function useRefTimer() {
    const [count,setCount]=useState(0)
    const intervalRef=useRef()
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setCount(prev=>prev+1)
        },1000)

        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])
  return (
    <div>
      {count}
      <button onClick={()=>clearInterval(intervalRef.current)}>clear interval</button>
    </div>
  )
}

export default useRefTimer
