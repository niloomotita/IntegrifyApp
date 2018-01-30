import React, { Component } from "react";
import "../styles/AdminLogin.css";
import bootstrap from "bootstrap";
class AdminLogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="wrapper">
        <form className="admin-form ">
          <label htmlFor="email">Email</label>
          <input
            className="admin-input"
            type="text"
            name="email"
            value={this.state.email}
            id="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label htmlFor="password">Password</label>
          <input
            className="admin-input"
            type="text"
            name="password"
            value={this.state.password}
            id="password"
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
          <button type="button" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default AdminLogIn;
