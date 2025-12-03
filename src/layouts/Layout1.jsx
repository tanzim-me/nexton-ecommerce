import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

const Layout1 = () => {
  return (
    <>  
        <Navbar />
        <Outlet />
        <Footer />
        <Copyright />
    </>
  )
}

export default Layout1