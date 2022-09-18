import React,{useState,useEffect} from 'react'

function IncorrecteDep() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('hassan')
    useEffect(()=>{
        const print=()=>{
          console.log(name)
        }
        const interval=setInterval(()=>{
            setCount(prev=>prev +1)
            print()
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[name])
  return (
    <div>
      {count}
    </div>
  )
}

export default IncorrecteDep
