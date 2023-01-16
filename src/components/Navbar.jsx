import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <nav class="navbar react-reveal navbar-expand-lg bg-body-tertiary fade-in-down">
  <div class="container-fluid nav-container">
    <Link class="navbar-brand logo-name " to="/"> <span> &lt; <img className='logo-img' src={logo} width="20%" alt="" /> </span>  / &gt;</Link>
    <button class="navbar-toggler nav-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse me-auto" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/education">Education</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/experience">Experience</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/projects">Projects</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar