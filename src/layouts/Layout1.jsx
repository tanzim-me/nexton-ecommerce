import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const Layout1 = () => {
  return (
    <>  
        <Navbar />
        <Outlet />
    </>
  )
}

export default Layout1