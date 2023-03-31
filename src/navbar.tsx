import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//Navbar for styling
function Navbar() {
  return (
    <body>
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
          <div className="container">
            <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <a className="nav-link text-dark">
                    <button className="btn btn-info">
                      <Link to="/home">Home</Link>
                    </button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark">
                    <button className="btn btn-info">
                      <Link to="/podcasts">Podcasts</Link>
                    </button>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark">
                    <button className="btn btn-info">
                      <Link to="/movies">Movies</Link>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </body>
  );
}

export default Navbar;
