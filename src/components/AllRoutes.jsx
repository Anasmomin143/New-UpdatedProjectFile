import React from 'react'
import Navbar from './Navbar'
import SignUp from './SignUp'
import Login from './Login'
import User from './User'
import Home from './Home'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
const AllRoutes = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route  path='/Home' element={<Home/>}></Route>
                <Route  path='/SignUp' element={<SignUp/>}></Route>
                <Route  path='/Login' element={<Login/>}></Route>
                <Route  path='/User' element={<User/>}></Route>
            </Routes>
        </Router>
      
    </div>
  )
}

export default AllRoutes
