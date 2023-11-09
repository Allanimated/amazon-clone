import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form className="login-form">
          <h5>Email or mobile phone number </h5>
          <input type="email" id="email" />
          <h5>Password</h5>
          <input type="password" />
          <button type="submit">Continue</button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </form>
      </div>
      <div className="sign-up">
        <div className="divider">
          <hr></hr>
          <h5>New to Amazon?</h5>
          <hr></hr>
        </div>
        <button>Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
