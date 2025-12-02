import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout1 from './layouts/Layout1'
import Home from './pages/Home'
import CheckOut from './pages/CheckOut'
import "./App.css"
import Explore from './pages/Explore'

const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout1 />}>
      <Route index element={<Home />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/explore" element={<Explore />} />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App