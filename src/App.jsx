import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout1 from './layouts/Layout1'
import Home from './pages/Home'
import CheckOut from './pages/CheckOut'
import "./App.css"
import Explore from './pages/Explore'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Product from './pages/Product'

const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout1 />}>
      <Route index element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App