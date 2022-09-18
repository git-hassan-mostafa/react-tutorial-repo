import React,{useState} from 'react'

function useStateArray() {
    const[lists,setList]=useState([])
    const addList=()=>{
        setList([...lists,
                {
                    id:lists.length,
                    value:Math.floor(Math.random() * 10)+1
                }
              ]
            )
    }
     return (
    <div>
      <button onClick={addList}> add items</button>
      <ul>
        items :
        {
        lists.map(list=> <li key={list.id}> {list.value} </li>)
      }
      </ul>
      
    </div>
  )
}

export default useStateArray
