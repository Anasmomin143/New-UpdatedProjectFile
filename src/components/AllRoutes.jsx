import React from 'react'
import { useState } from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import User from './Pages/User';
const AllRoutes = () => {
  const [user , setUserOnLogin] = useState(JSON.parse(localStorage.getItem("LogginUser")))
  return (
    <div>
        <Router>
               <Navbar user={user}/>
            <Routes>
                <Route  path='/' element={<Home/>}></Route>
                <Route  path='/Home' element={<Home/>}></Route>
                <Route  path='/SignUp' element={<SignUp/>}></Route>
                <Route  path='/Login' element={<Login setUserOnLogin={setUserOnLogin}/>}></Route>
                <Route  path='/user' element={
                user && user.id ? <User user={user} setUserOnLogin={setUserOnLogin}/> : <Login setUserOnLogin={setUserOnLogin}/>
                }></Route>
            </Routes>
        </Router>
      
    </div>
  )
}

export default AllRoutes
