import React from 'react'
import Header from './Components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App