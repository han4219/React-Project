import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { path } from './constants/path'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

export default function Router() {
  return (
    <Routes>
      <Route path={path.home} exact element={<Home />}></Route>
      <Route
        path={path.login}
        element={
          <RegisterLayout title="Đăng nhập">
            <Login />
          </RegisterLayout>
        }
      ></Route>
      <Route
        path={path.register}
        element={
          <RegisterLayout title="Đăng ký">
            <Register />
          </RegisterLayout>
        }
      ></Route>
      <Route path={path.notFound} element={<NotFound />}></Route>
    </Routes>
  )
}