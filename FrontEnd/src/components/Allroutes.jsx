import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Privateroutes from './PrivateRoutes'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Calculate from '../pages/Calculate'
import Sell from '../pages/Sell'
import Contact from '../pages/Contact'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Privateroutes><Profile /></Privateroutes>} />
    <Route path="/sell" element={<Privateroutes><Sell /></Privateroutes>} />
    <Route path="/contact" element={<Privateroutes><Contact/></Privateroutes>} />
    <Route path="/calculate" element={<Privateroutes><Calculate /></Privateroutes>} />
   
   </Routes>
  )
}

export default AllRoutes