import React, { useRef, useState } from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <div className="loginButton">Sign In</div>
        </div>
        <div className="container">
          <form action="">
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or phone number" />
            <input type="password" placeholder="Password" />
            <button className="loginButton">Sign In</button>
            <span>
              New to Netflix? <b>Sign Up Now</b>
            </span>
            <small>
              This pagi is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
