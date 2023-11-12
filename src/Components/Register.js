import React from "react";
import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  function handleFormData(e) {
    const key = e.target.id;
    const value = e.target.value;
    const user = {
      ...formData,
      [key]: value,
    };
    setFormData(user);
  }

  const registerUser = async (e) => {
    e.preventDefault();
    if (formData.password1 !== formData.password2) {
      return setMessage("Your passwords do not match. Try again");
    }
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password2
      );
      // User registered successfully navigate them to home page
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };
  return (
    <div className="register">
      <Link to="/">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="register-container">
        {message && (
          <p style={{ color: "red", fontSize: "12px", width: "200px" }}>
            {message}
          </p>
        )}
        <h1>Create account</h1>
        <form className="register-form" onSubmit={registerUser}>
          <h5>Your name</h5>
          <input
            type="text"
            placeholder="First and last name"
            id="name"
            value={formData.name}
            onChange={handleFormData}
            required
          />
          <h5>Enter your email</h5>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleFormData}
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="At least 6 characters"
            id="password1"
            value={formData.password1}
            onChange={handleFormData}
            required
          />
          <span>Passwords must be at least 6 characters</span>
          <h5>Re-enter password</h5>
          <input
            type="password"
            id="password2"
            value={formData.password2}
            onChange={handleFormData}
            required
          />
          <input type="submit" value="Continue" className="formButton" />
          <p>
            By creating an account, you agree to Amazon's Conditions of Use and
            Privacy Notice.
          </p>
          <hr></hr>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
