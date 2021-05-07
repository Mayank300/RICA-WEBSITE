import React, { useState } from "react";
import "./Login.css";
import { Mail, User, Lock } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/home");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            {/* for sign in  */}

            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
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
              <button
                id="form__signin__button"
                className="btn solid"
                type="submit"
                onClick={signIn}
              >
                Sign in
              </button>
              <p className="social-text">Or Sign in with google</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </form>

            {/*------------for sign in-------------  */}
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h1>New at RICA ?</h1>
              <p>
                Not made an account yet?? <br />
                Make a new account for <h2>free!!!</h2>
              </p>

              <Link to="/signup">
                <button id="sign-up-btn" className="btn transparent">
                  Sign up
                </button>
              </Link>
            </div>
            <img src="log.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
