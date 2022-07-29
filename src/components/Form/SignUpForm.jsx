import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InputChanger from '../utils/general';
import { passWordvalidate, nameValidatetion, Emailvalidate } from '../utils/Validation'
const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [conpass, setConpass] = useState("")
  const NavigateToLoginPage = useNavigate()
  const [ValidationMessage, setValidationMessage] = useState(null)

  const nameChange = (event) => {
    InputChanger(event, setName);
  }
  const emailChange = (event) => {
    InputChanger(event, setEmail);
  }
  const passChange = (event) => {
    InputChanger(event, setPass);
  }
  const conpassChange = (event) => {
    InputChanger(event, setConpass);
  }


  const handelsubmit = async (event) => {
    event.preventDefault();
    const ValidationResultForPass = passWordvalidate(pass)
    const ValidationResultForName = nameValidatetion(name)
    const ValidationResultForEmail = Emailvalidate(email)

    if (ValidationResultForName.result === false) {
      setValidationMessage(ValidationResultForName.message)
      return;
    } else if (ValidationResultForPass.result === false) {
      setValidationMessage(ValidationResultForPass.message)
      return;
    } 
    else if (ValidationResultForEmail.result === false) {
      setValidationMessage(ValidationResultForEmail.message)
      return;
    }

    const id =new Date().getTime().toString();
    const newrecords ={name,email,pass,conpass,id}

    let userlist =await JSON.parse(localStorage.getItem("NewData"));
    userlist = userlist === null ? [] : userlist

    if(newrecords.pass===newrecords.conpass){
      await localStorage.setItem("NewData",JSON.stringify([...userlist , newrecords]));
      NavigateToLoginPage("/Login")
    }
  
  
  }



  return (
    <>
    
      <div className='mt-4'>
        <h1 style={{ textAlign: "center" }} > SignUp </h1>
        <p>{ValidationMessage}</p>
        <form onSubmit={handelsubmit}>
          <div className='container col-4 justify-content-around'>
            <div className="mb-3">
              <label htmlFor="UserName" className="form-label">Name</label>
              <input type="text" name='UserName' className="form-control" id="UserName" value={name} onChange={nameChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="UserEmail" className="form-label">Email address</label>
              <input type="email" name='UserEmail' className="form-control" id="UserEmail" aria-describedby="emailHelp" value={email} onChange={emailChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="UserPassword" className="form-label">Password</label>
              <input type="password" name='UserPassword' className="form-control" id="UserPassword" value={pass} onChange={passChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="UserConfirmPassword" className="form-label">Confirm Password</label>
              <input type="password" name='UserConfirmPass' className="form-control" id="UserConfirmPassword" value={conpass} onChange={conpassChange} />
            </div>
            <button type="submit" className="btn btn-success">SignUp</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp
