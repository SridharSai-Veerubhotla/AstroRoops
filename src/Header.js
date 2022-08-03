import React from "react";
import {NavLink} from 'react-router-dom';


export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
       <a className="navbar-brand" href="/Home"><h1 className="card-title text-danger">AstroRoops</h1></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">    
    
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">      
        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#todaysDetails">Day Details</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#sukraSiddantam">Sukra Siddantham</a>        
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#horaDetails">Hora Details</a>      
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#tharaBalam">Thara Balam</a>      
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/BhagvadGita">BhagvadGita</NavLink>
      </li>

    </ul>    
  </div>
</nav>





  );
};
