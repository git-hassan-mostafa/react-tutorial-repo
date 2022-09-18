import React,{useState} from 'react'

function UseStateObject() {
    const[name,setNames]=useState({first:'',last:''})
  return (
    <div>
      <input type={'text'} value={name.first} onChange={(e)=>setNames({...name,first:e.target.value})} />
      <input type={'text'} value={name.last} onChange={(e)=>setNames({...name,last:e.target.value})} />
      <h3>first name is : {name.first}</h3>
      <h3>last name is :{name.last}</h3>
    </div>
  )
}

export default UseStateObject
