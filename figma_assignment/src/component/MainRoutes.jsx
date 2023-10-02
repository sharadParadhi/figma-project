import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import Contact from '../pages/Contact'

function MainRoutes() {
  return (
    <>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </>
  )
}

export default MainRoutes
