import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { Switch, Route, Link } from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Register = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Register</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Register/Sign-In"}>Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Register/Sign-Up"}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
      <SignUp />
      <SignIn />
          <Switch>
            <Route exact path='/Register/Sign-In' render ={()=>{return <SignIn />}} />
            <Route exact path='/Register/Sign-Up' render ={()=>{return <SignUp />}} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Register;
