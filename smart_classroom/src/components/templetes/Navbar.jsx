import React from 'react'
import logo from '../../Assests/logo.PNG'
function Navbar() {

  return (
    <>
        <nav class="navbar navbar-expand-md navbar-dark position-fixed w-100 border" style={{backgroundColor:"rgb(247, 23, 68)"}}>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Smart Classroom</a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#services">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#contact">Contact</a>
              </li>
            </ul>
            <button className='btn btn-warning m-2'>Login</button>
          </div>
        </nav>
    </>
  )
}

export default Navbar