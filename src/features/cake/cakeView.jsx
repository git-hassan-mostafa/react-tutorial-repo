import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ordered,restocked} from './cakeSlice'

const CakeView = () => {
    const nbOfCakes=useSelector((state)=>state.cake.nbOfCakes)
    const dispatch= useDispatch()
  return (
    <div>
        <h2>number of cakes {nbOfCakes}</h2>
        <button onClick={()=>dispatch(ordered())}>order cake</button>
        <button onClick={()=>dispatch(restocked(5))}>restocke cake</button>
    </div>
  )
}

export default CakeView



