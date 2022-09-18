import React,{useContext} from 'react'
import {userContext,userContext2,userContext3} from './context'
function UserContext() {
const Use1=useContext(userContext)
const Use2=useContext(userContext2)
const Use3=useContext(userContext3)
  return (
    <div>
      {Use1}-{Use2}-{Use3}
    </div>
  )
}

export default UserContext
