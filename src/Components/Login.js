import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User logged in successfully
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    }
  };
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
        <form className="login-form" onSubmit={signIn}>
          {message && (
            <p style={{ color: "red", fontSize: "12px", width: "200px" }}>
              {message}
            </p>
          )}
          <h5>Email or mobile phone number </h5>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
        <button onClick={(e) => navigate("/register")}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
