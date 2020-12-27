import React, { useState, useEffect } from "react";
// we use link component to have a SPA, otherwise every time we click on a rout it will download the whole page again
//https://reactrouter.com/web/api/Link
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {props.navlist.map((item) => {
              return (
                <li key={item} className="nav-item">
                  <Link
                    to={{ pathname: "/" + item }}
                    className="nav-link active"
                    aria-current="page"
                  >
                    {item.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
