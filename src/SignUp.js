import React, { useState } from "react";
import "./SignUp.css";
import { Mail, User, Lock, Hash, MapPin } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { auth } from "./firebase";
import db from "./sideBarPage/config";

function SignUp() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [usernameLast, setUsernameLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        db.collection("users").add({
          first_name: username,
          last_name: usernameLast,
          contact: number,
          email_id: email,
          address: address,
          IsBookRequestActive: false,
        });
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/home");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <User className="icon__feather" />
                <input
                  type="text"
                  placeholder="First Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-field">
                <User className="icon__feather" />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={usernameLast}
                  onChange={(e) => setUsernameLast(e.target.value)}
                />
              </div>
              <div className="input-field">
                <Mail className="icon__feather" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <Lock className="icon__feather" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-field">
                <Hash className="icon__feather" />
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="input-field">
                <MapPin className="icon__feather" />
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button
                onClick={register}
                id="form__signup__button"
                className="btn"
              >
                Sign up
              </button>
              <p className="social-text">Or Sign up with google</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  {/* <i className="fab fa-google"></i> */}
                </a>
              </div>
            </form>

            {/*------------for sign up-------------  */}
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h1>One of us ?</h1>
              <p>
                Sign in with your email address and password or,
                <br />
                Sign in with social platforms
              </p>

              <Link to="/login">
                <button className="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </Link>
            </div>
            <img href="img/register.png" className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
