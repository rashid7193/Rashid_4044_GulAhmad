import React from 'react'
import { Link } from "react-router-dom"
import img1 from '../images/PIC8.jpg'
import  "../CSS files/NavStyle.css"

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark align= center">
        <div class="container-fluid">
          <a class="navbar-brand" to="#"> <img src={img1} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active text-white" aria-current="page" >Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/AboutUs" class="nav-link active text-white" aria-current="page">About </Link>
              </li>
              <li class="nav-item">
                <Link to="/ContactUs" class="nav-link active text-white" aria-current="page" >Contact</Link>
              </li>
              <li class="nav-item">
                <Link to="/SignUp" class="nav-link active text-white" aria-current="page" >Signup</Link>
              </li>
              <li class="nav-item">
                <Link to="Login" class="nav-link active text-white" aria-current="page" href="#">Login</Link>
              </li>



            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success bg-dark text-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
