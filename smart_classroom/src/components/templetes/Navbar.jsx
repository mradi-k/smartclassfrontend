import React from 'react'
import logo from '../../Assests/logo.PNG'
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const Navigate = useNavigate();
  const handleLogb = () =>{
    Navigate('/login');
  }
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark position-fixed w-100 border" style={{backgroundColor:"rgb(247, 23, 68)"}}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Smart Classroom</a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#services">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#contact">Contact</a>
              </li>
            </ul>
            <button onClick={handleLogb} className='btn btn-warning m-2'>Login</button>
          </div>
        </nav>
    </>
  )
}

export default Navbar