import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

const UsersView = () => {
  const user = useSelector((state) => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h2>list of users</h2>
      {user.loading && <div>loading ...</div>}
      {!user.loading && user.error ? <div> error : {user.error} </div> : null}
      {!user.loading && user.users.length && <div>
        <ul>
          {user.users.map(user =>

            <li key={user.id}> {user.id} - {user.name} </li>

          )}
        </ul>
      </div>}
    </div>
  )
}

export default UsersView
