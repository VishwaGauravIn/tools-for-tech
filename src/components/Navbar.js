import React from 'react'
import ContentTwitter from './ContentTwitter';


function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-color-purple">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><b>Tools for Tech</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Techs
                </a>
                <ul className="dropdown-menu bg-color-purple" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item text-color-white" href="/">Twitter</a></li>
                    <li><a className="dropdown-item text-color-white" href="/">Instagram</a></li>
                    <li><a className="dropdown-item text-color-white" href="/">WhatsApp</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>
    );
  }
  export default Navbar;