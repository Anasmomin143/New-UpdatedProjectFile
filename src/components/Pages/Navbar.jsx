import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const { user } = props
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark alert-danger">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/Home">EarOn.in</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/Home">Home</Link>
              </li>
              {
                user && user.id ? null : <li className="nav-item">
                  <Link className="nav-link text-light" to="/SignUp">SignUp</Link>
                </li>
              }

              {
                user && user.id ? null : <li className="nav-item">
                  <Link className="nav-link text-light" to="/Login">Login</Link>
                </li>
              }

              <li className="nav-item">
                <Link className="nav-link text-light" to="/user">User</Link>
              </li>
              <li className="nav-item m-l-0 " >
                <Link to="/Cart" className="btn btn-secondary btn-size-3" style={{
                  size: 'auto'
                }}>
                  <span className="glyphicon glyphicon-shopping-cart">
                  </span> <b> Cart  </b>
                  <b></b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        vvnvnb
      </nav>
    </>
  )
}

export default Navbar
