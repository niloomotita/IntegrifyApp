import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import LogIn from './LogIn';
import AdminLogin from "./AdminLogin"
import bootstrap from 'bootstrap'; 
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact path="/"
            render={() => (
              <div>
                <Header/>
                <LogIn/>
              </div>
            )}
          />
          <Route
            exact path="/Admin"
            render={() => (
              <div>
                <Header/>
                <AdminLogin/>
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
