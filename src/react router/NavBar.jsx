import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ContextProfile } from './Authentication'
const NavBar = () => {
    
    const NavStyle=({isActive})=>{
        return{
            color: isActive ?'red' : null,
            fontWeight: isActive ? 'bold' :'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    const userExist= ContextProfile()
  return (
    <div>
      {/* <Link to={'/'} >Home</Link>
      <div></div>
      <Link to={'/about'}>about</Link> */}
      <NavLink style={NavStyle} to={'/'} >Home</NavLink> 
      {' '} 
      <NavLink style={NavStyle} to={'/parag'} >paragraph</NavLink> 
      {' '} 
      <NavLink style={NavStyle} to={'/about'}>about</NavLink>
      {' '}
      <NavLink style={NavStyle} to={'/nested'}>nested</NavLink>
      {' '}
      <NavLink style={NavStyle} to={'/profile'}>Profile</NavLink>
      {' '}
      {
        !userExist.first  && <NavLink style={NavStyle} to={'/login'}>log in</NavLink>
      } 
      {' '}
      {/* <NavLink style={NavStyle} to={'/user'}>user</NavLink> */}
    </div>
  )
}

export default NavBar
