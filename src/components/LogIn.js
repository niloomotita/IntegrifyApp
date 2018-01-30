import React from "react";
import { Link } from "react-router-dom";
import "../styles/LogIn.css";
import bootstrap from "bootstrap";
function LogIn() {
    return (
      <div className="wrapper">
        <div className="wrapper-container ">
          <h3>Login</h3>
          <div className="git-wrapper">
            <button className="github" />
            <span> Log in with Github</span>
          </div>
          <button type="button" className="btn btn-link admin-btn">
            <Link to="/Admin">I'm an admin</Link>
          </button>
        </div>
      </div>
    );
}

export default LogIn;
