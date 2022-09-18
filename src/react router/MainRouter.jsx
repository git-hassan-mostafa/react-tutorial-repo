import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './AboutPage'
import DynamicRoutes, { Admin, UserId } from './DynamicRoutes'
import HomePage, { Navigated, NoMatch } from './HomePage'
import NavBar from './NavBar'
import NestedRouter, { NewProduct, Product } from './NestedRouter'
import {useParams} from "react-router-dom";
import Authentication, { Login, ProtectedProfile, UserStates } from './Authentication'
// import Paragraph from './Paragraph'
const Lasyload= React.lazy(()=> import ('./Paragraph'))
          

const MainRouter = () => {
  const {userId} = useParams();
  return (
    <div>
      <UserStates>
        <NavBar />
      <Routes>
        <Route path='navigated' element={<Navigated />} />
        <Route path='/' element={<HomePage/>} />
        <Route path='about' element={<AboutPage/>} />
        <Route path='parag' element={
          <React.Suspense fallback={'loading ...'}>
            <Lasyload />
          </React.Suspense>
        } />
        <Route path='profile' element={<ProtectedProfile > <Authentication /> </ProtectedProfile> } />
        <Route path='login' element={<Login />} /> 
        <Route path='nested' element={<NestedRouter />}>
            <Route index element={<Product />} />
            <Route path='product' element={<Product />} />
            <Route path='new-product' element={<NewProduct/>} />
        </Route>
        <Route path='dynamic/:id' element={<UserId />} />
        <Route path='dynamic' element={<DynamicRoutes />} >
          <Route path='admin' element={<Admin />} />
        </Route>
        
        <Route path='*' element={<NoMatch />} />
      </Routes>
      </UserStates>
    
    </div>
  )
}

export default MainRouter
