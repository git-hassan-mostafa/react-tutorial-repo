import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
   const navigate= useNavigate()
  return (
    <div>
      <h1>home page</h1>
      <button onClick={()=>navigate('navigated')}>navigate</button>
    </div>
  )
}

export default HomePage

export const Navigated=()=>{
    return (
        <div>
            <h1>Navigated</h1>
        </div>
    )
}
export const NoMatch=()=>{
    return (
        <div>
            <h1>this page does not exist</h1>
        </div>
    )
}