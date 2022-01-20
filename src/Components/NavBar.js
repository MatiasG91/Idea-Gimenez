import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand">Matias E-commerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
        <Link className="nav-link" to='/Producto'>Productos</Link>        
        <Link className="nav-link" to='/Contacto'>Contacto</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default navbar