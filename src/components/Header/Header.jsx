import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"

export const Header = () => {
  return (
<div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid justify-content-center"> 
      <Link to='/'>
        <img src="img/logo1.jpg" width='150' height='150'alt='logo'/>
      </Link>
      <div className="mx-auto">
        <h1 className="fuente"> ................Wika</h1>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse --bs-body-bg" id="navbarNavAltMarkup">
  <div className="navbar-nav ms-auto" style={{maxWidth: 'fit-content'}}>
    <Link className="nav-link active" aria-current="page" to="/home">Inicio</Link>
    <Link className="nav-link active" to="/somos">Quienes Somos</Link>
    <Link className="nav-link active" to="/contacto">Contacto</Link>
  </div>
</div>


    </div>
  </nav>
</div>


  
  )
}
