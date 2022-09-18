import React, { createContext, useContext, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Authentication = () => {
    const user = ContextProfile()
    const navigate = useNavigate()
    const logout = () => {
        user.logout()
        navigate('/')

    }
    return (
        <div>
            {
                user ? <div>your first name : {user.first} <br /> your last name : {user.last} <button onClick={logout}>log out </button></div> : <div>welcome guest

                </div>
            }


        </div>
    )
}

const profileContext = createContext(null)
export const UserStates = ({ children }) => {

    const [first, setFirst] = useState(null)
    const [last, setLast] = useState(null)
    const login = (first, last) => {
        setFirst(first)
        setLast(last)
    }
    const logout = () => {
        setFirst(null);
        setLast(null)
    }
    return (
        <profileContext.Provider value={{ first, last, login, logout }} >
            {children}
        </profileContext.Provider>
    )
}
export const ContextProfile = () => {
    return useContext(profileContext)
}

export const ProtectedProfile = ({children}) => {
    const location = useLocation()

    const loginUser = ContextProfile()
    if (!loginUser) return <Navigate to='/login' state={{path: location.pathname}} />
    return children

}

export const Login = () => {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const loginUser = ContextProfile()
    const navigate = useNavigate()
    const location = useLocation()

    const navigatedLocation = location.state?.path||'/'
    const handelUser = () => {
        loginUser.login(first, last);
        navigate(navigatedLocation,{replace:true})
    }
    return (
        <div>
            <label>
                first name : <input type="text" onChange={(e) => setFirst(e.target.value)} /> <br />
                last name : <input type="text" onChange={(e) => setLast(e.target.value)} /> <br />
            </label>
            <button onClick={handelUser}>login</button>
        </div>

    )
}

export default Authentication

