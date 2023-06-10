import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './index.scss'
import Layout from './components/layout/Layout'
import Profile from './pages/profile/Profile'
import Chat from './pages/chat/Chat'
import Register from './pages/register/Register'

function App() {


  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat/>} />
        </Route>
    </Routes>
  )
}

export default App
