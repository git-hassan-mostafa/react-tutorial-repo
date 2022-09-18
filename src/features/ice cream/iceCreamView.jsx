import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

const IceCreamView = () => {
  const nbOfIceCream = useSelector((state) => state.iceCream.nbOfIceCream)
  const dispactch=useDispatch()
  return (
    <div>
      <h2>number of ice cream is {nbOfIceCream} </h2>
      <button onClick={()=>dispactch(ordered())}>order ice cream</button>
      <button onClick={()=>dispactch(restocked(5))}>restocke ice cream</button>
    </div>
  )
}

export default IceCreamView
