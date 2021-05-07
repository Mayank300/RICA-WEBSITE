import React, { Component } from "react";
import { Mail, Hash, MapPin, User } from "react-feather";
import firebase from "firebase";
import db from "./config";
import { Link, useHistory } from "react-router-dom";

export default class Setting extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      docId: "",
    };
  }

  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection("users")
      .where("email_id", "==", email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            emailId: data.email_id,
            firstName: data.first_name,
            lastName: data.last_name,
            address: data.address,
            contact: data.contact,
            docId: doc.id,
          });
        });
      });
    console.log(email);
  };

  updateUserDetails = () => {
    db.collection("users").doc(this.state.docId).update({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      address: this.state.address,
      contact: this.state.contact,
      email_address: this.state.emailId,
    });

    alert("Profile Updated Successfully");
  };

  componentDidMount() {
    this.getUserDetails();
  }

  render() {
    return (
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            {/* for sign in  */}

            <form action="#" className="sign-in-form">
              <h2 className="title">Update Profile</h2>
              {/*  */}
              <div className="input-field">
                <Mail className="icon__feather" />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(text) => {
                    this.setState({
                      emailId: text.target.value,
                    });
                  }}
                  value={this.state.emailId}
                />
              </div>
              {/*  */}
              <div className="input-field">
                <User className="icon__feather" />
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(text) => {
                    this.setState({
                      firstName: text.target.value,
                    });
                  }}
                  value={this.state.firstName}
                />
              </div>
              {/*  */}
              <div className="input-field">
                <User className="icon__feather" />
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(text) => {
                    this.setState({
                      lastName: text.target.value,
                    });
                  }}
                  value={this.state.lastName}
                />
              </div>

              {/*  */}

              <div className="input-field">
                <MapPin className="icon__feather" />
                <input
                  type="text"
                  placeholder="Address"
                  onChange={(text) => {
                    this.setState({
                      address: text.target.value,
                    });
                  }}
                  value={this.state.address}
                />
              </div>

              {/*  */}

              <div className="input-field">
                <Hash className="icon__feather" />
                <input
                  type="number"
                  placeholder="Contact Number"
                  onChange={(text) => {
                    this.setState({
                      contact: text.target.value,
                    });
                  }}
                  value={this.state.contact}
                />
              </div>

              {/*  */}

              <Link to="/home">
                <button
                  id="form__signin__button"
                  className="btn solid"
                  type="submit"
                  onClick={() => {
                    this.updateUserDetails();
                  }}
                >
                  Update
                </button>
                {/*  */}
              </Link>
            </form>

            {/*------------for sign in-------------  */}
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h1>Make your self up to date!!!</h1>
              <p>
                or continue selling
                <br />& purchasing products world wide.
              </p>

              <Link to="/home">
                <button className="btn transparent" id="sign-in-btn">
                  Go Back
                </button>
              </Link>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
