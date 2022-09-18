import React from 'react'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'

const DynamicRoutes = () => {
    const [searchParam,setSearchParam]= useSearchParams()
  return (
    <div>
      <h1>user 1</h1>
      <h1>user 2</h1>
      <h1>user 3</h1>
      <div>
        <button onClick={()=>setSearchParam({filter:'active'})}>set filter</button>
        <button onClick={()=>setSearchParam({})}>reset filter</button>
        <div>
            {
                searchParam.get('filter')==='active' ?
                 <h2>active users</h2>: <h2>normal users</h2>
            }
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export const UserId=()=>{
    const {id}= useParams()
    return(
       <div>
        inforamtion about user {id}
    </div> 
    )
    
}
export const Admin=()=>{
    return(
        <div>
        inforamtion about admin
    </div>
    )
    
}
export default DynamicRoutes;



