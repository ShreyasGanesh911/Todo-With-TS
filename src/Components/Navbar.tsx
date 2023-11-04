import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h1 className="navbar-brand mx-5">Tasky</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-5" id="navbarNav" style={{flexFlow:'row-reverse'}}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/Task'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Pricing</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
