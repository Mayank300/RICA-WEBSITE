import React, { useEffect } from "react";
import { ArrowLeft, Bell, User, Settings, ShoppingCart } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import db from "./sideBarPage/config";
import "./Header.css";

export default function Header({
  logOut,
  userNameHeading,
  ArrowLeft,
  notificationLength,
  cartLength,
}) {
  var user = firebase.auth().currentUser;
  var email;

  useEffect(() => {
    getEmail();
  }, [getEmail]);

  function getEmail() {
    if (user != null) {
      email = user.email;
    }
    return email;
  }

  return (
    <div className="page__header">
      <Link to="/sell">
        <div className="page__header__arrow__left">{ArrowLeft}</div>
      </Link>
      <div className="header__user__name__container">
        <User className="header__user" />
        <div className="header__user__name">
          <b style={{ marginRight: "10px" }}>Hello,</b>
          {user != null ? getEmail() : <Link to="/login">Login</Link>}
        </div>
      </div>
      <Link to="/setting">
        <div className="header__icon__settings">
          <Settings className="header__settings" />
        </div>
      </Link>
      <Link to="/notifications">
        <div className="header__icon__bell">
          <div className="icon-button">
            <Bell className="header__bell" />
            <div className="icon-button__badge">{notificationLength}</div>
          </div>
        </div>
      </Link>
      <Link to="/home">
        <div className="header__icon__cart">
          <div className="icon-button">
            <ShoppingCart className="header__cart" />
            <div className="icon-button__badge">{cartLength}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
