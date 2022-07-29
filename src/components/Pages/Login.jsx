import React from 'react'
import LoginForm from '../Form/LoginForm'
const Login = (props) => {
  const {setUserOnLogin} = props
  
    return (
    <div>
    <LoginForm setUserOnLogin={setUserOnLogin}/>
    </div>
  )
}

export default Login