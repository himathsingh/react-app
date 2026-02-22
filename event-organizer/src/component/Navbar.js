import React from 'react'

export default function navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">{props.title}</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
              <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                <li><a className="dropdown-item" href="#" onClick={() => props.onNavigate('classes')}>Classes</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => props.onNavigate('staff')}>Staff</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => props.onNavigate('students')}>Students</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => props.onNavigate('collegeinfo')}>College Info</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="eventsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">EVENTS</a>
              <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                <li><a className="dropdown-item" href="#">Sports</a></li>
                <li><a className="dropdown-item" href="#">Arts Club</a></li>
                <li><a className="dropdown-item" href="#">NSS Club</a></li>
                <li><a className="dropdown-item" href="#">Coding Club</a></li>
              </ul>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-dark" type="button" onClick={props.onLoginClick}>Login</button>
            <button className="btn btn-dark" type="button" onClick={props.onRegisterClick}>Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
