import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class navbar extends Component {
  render() {
    return (

      <div>
   
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News-Monkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        {/* <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</li> */}
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">Technolgy</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
        
      
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Country</a>

          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">India</a></li>
            <li><a className="dropdown-item" href="/">Us</a></li>
            <li><a className="dropdown-item" href="/">Others</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>

      </div>

    )
  }
}

export default navbar