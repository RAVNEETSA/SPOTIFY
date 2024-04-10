import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signupphone from './Components/Signupphone'
import Signup from './Components/Signup'
export default function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <div className='w-screen h-screen'>
   
     <Routes>

        <Route path='/' element = {<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/phone' element={<Signupphone />} />     {/* signup using phone number */}
     </Routes>
     </div>
    </BrowserRouter>
    </div>
    </>
  )
}
