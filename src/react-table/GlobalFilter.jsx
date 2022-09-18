import React,{useState} from 'react'
import { useAsyncDebounce } from 'react-table'

const GlobalFilter = ({filter,setFilter}) => {
  const [value,setValue]=useState(filter)
  const onchange=useAsyncDebounce(value=>{
    setFilter(value)
  },100)
  return (
    <div>
      search : {' '}
      <input type="text" value={filter || ''}
      onChange={e=>{
        setValue(e.target.value)
        onchange(e.target.value)
      }}
      />
    </div>
  )
}

export default GlobalFilter

