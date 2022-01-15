import React from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import Router from './Router'
import 'react-toastify/dist/ReactToastify.css' //import css cho khoi toast
import { ToastContainer } from 'react-toastify' //import khối toast hiển thị
import Authorization from './components/Authorization/Authorization'

function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer />
      <Authorization />
    </div>
  )
}

export default App
