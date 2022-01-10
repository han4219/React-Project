import React from 'react'
import { Routes, Route } from 'react-router-dom'
import User from './components/User/User'
import { path } from './constants/path'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard'
import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

export default function Router() {
  return (
    <Routes>
      <Route
        path={path.home}
        exact
        element={
          <React.Fragment>
            <MainLayout>
              <Home />
            </MainLayout>
          </React.Fragment>
        }
      ></Route>
      <Route
        path={path.login}
        element={
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng nhập">
              <Login />
            </RegisterLayout>
          </UnauthenticatedGuard>
        }
      ></Route>
      <Route
        path={path.register}
        element={
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng ký">
              <Register />
            </RegisterLayout>
          </UnauthenticatedGuard>
        }
      ></Route>

      <Route
        path={path.user}
        element={
          <AuthenticatedGuard>
            <MainLayout>
              <User />
            </MainLayout>
          </AuthenticatedGuard>
        }
      ></Route>

      <Route
        path={path.cart}
        element={
          <AuthenticatedGuard>
            <MainLayout>
              <Home />
            </MainLayout>
          </AuthenticatedGuard>
        }
      ></Route>
      <Route path={path.notFound} element={<NotFound />}></Route>
    </Routes>
  )
}
