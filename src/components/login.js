import React, { Component } from "react";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Header from "./Header.js";
import css from "../style/login.css";

class Login extends Component {
  render() {
    return (
      <div className="login">
        
        <form className="login-form">
          <h3 className="login-title">Log in to Trello Lite</h3>
          <h5 className="register-link">
            or <Link to="/register">Create an Account</Link>
          </h5>
          <TextField
            className="login-email"
            type="email"
            name="email"
            floatingLabelText="email"
          />
          <TextField
            className="login-password"
            type="password"
            name="password"
            floatingLabelText="password"
          />
          <RaisedButton className="login-button">login</RaisedButton>
        </form>
      </div>
    );
  }
}

export default Login;
