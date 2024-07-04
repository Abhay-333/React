import React from 'react'
import Login from './Components/Login';
import Profile from './Components/Profile';
import UserContextProvider from './Context/UserContextProvider'

const App = ()=>{
  return (
    <UserContextProvider>
    <Login></Login>
    <Profile></Profile>
    </UserContextProvider>
  )
}

export default App;