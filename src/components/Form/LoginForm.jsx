import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputChanger from '../utils/general';
import {passWordvalidate} from '../utils/Validation'
import User from './UserInfo';

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [pass, setpass] = useState("")
  const NavigateToUserProfile = useNavigate()
  const [ValidationMessage,setValidationMessage]=useState()
  const currentdata = JSON.parse(localStorage.getItem("NewData"));
  const {setUserOnLogin} = props
  const emailChange = (event) => {
    InputChanger(event, setEmail);
  }
  const passChange = (event) => {
    InputChanger(event,setpass);
  }
  const handelsubmit =async (event) => {
    event.preventDefault();
    const ValidationResultForPass = passWordvalidate(pass)
    if(ValidationResultForPass.result===false){
      setValidationMessage(ValidationResultForPass.message);
      return
    }
    const userlist=await JSON.parse(localStorage.getItem("NewData"))
    const result = await userlist.find(
      (user)=>user.email===email&&user.pass===pass
    );
      if(result){
        localStorage.setItem("LogginUser",JSON.stringify(result))
        setUserOnLogin(JSON.parse(localStorage.getItem("LogginUser")))
        NavigateToUserProfile("/user")
      }
    
  }
  return (
    <div className='mt-4 justify-content-lg-center'>
      <h1 style={{ textAlign: "center" }} > Login </h1>

      <form onSubmit={handelsubmit}>
        <div className='container col-4 '>
          <div className="mb-3">
            <label htmlFor="UserEmail" className="form-label">Email address</label>
            <input type="email" name='UserEmail' className="form-control" id="UserEmail" aria-describedby="emailHelp" value={email} onChange={emailChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="UserPassword" className="form-label">Password</label>
            <input type="password" name='UserPassword' className="form-control" id="UserPassword" value={pass} onChange={passChange} />
          </div>

          <button type="submit" className="btn btn-secondary">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
