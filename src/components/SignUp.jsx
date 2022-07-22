import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [conpass, setConpass] = useState("")
  const [multipledata,setmultipledata]=useState([])
  const navigatetootherpage=useNavigate()

  const nameChange = (event) => {
    setName(event.target.value)
  }
  const emailChange = (event) => {
    setEmail(event.target.value)
  }
  const passChange = (event) => {
    setPass(event.target.value)
  }
  const conpassChange = (event) => {
    setConpass(event.target.value)
  }
  // console.log("name",name);
  // console.log("email",email);
  // console.log("pass",pass);
  // console.log("conpass",conpass);


  const handelsubmit=(event)=>{
    event.preventDefault();
    
  
  }


  return (
    <>
      <h1 style={{ textAlign: "center" }} > SignUp </h1>

      <form onSubmit={handelsubmit}>
        <div className='container'>
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  )
}

export default SignUp
