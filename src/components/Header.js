import React from "react";
import "../styles/Header.css";
import bootstrap from "bootstrap";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <button className="integrify-logo" />
      <button
        className="navbar-toggler border-0"
        type="button"
        data-toggle="collapse"
        data-target="#logout-collapse"
        aria-controls="logout-collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="logout-collapse">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link text-right" href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
