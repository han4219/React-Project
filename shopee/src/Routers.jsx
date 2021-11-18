import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { path } from './constants/path'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

export default function Routers() {
  return (
    <Routes>
      <Route path={path.home} exact element={<Home />}></Route>
      <Route path={path.login} element={<Login />}></Route>
      <Route path={path.register} element={<Register />}></Route>
      <Route path={path.notFound} element={<NotFound />}></Route>
    </Routes>
  )
}
