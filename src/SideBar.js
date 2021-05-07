import React from "react";
import "./SideBar.css";
import {
  Home,
  CreditCard,
  Bell,
  DollarSign,
  ArrowRightCircle,
  Settings,
  LogOut,
  List,
} from "react-feather";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

export default function SideBar() {
  const history = useHistory();

  const signOut = () => {
    auth.signOut();
    history.push("/login");
  };

  return (
    <div className="sidebar__container">
      <Link className="header" to="/home">
        <img src="logo.png" className="logo" />
        <p>RICA</p>
      </Link>
      <div className="columns">
        {/* home */}
        <Link to="/home" className="rows">
          <Home className="sidebar__icon" />
          <p className="sidebar__title">Home</p>
        </Link>
        {/* notification */}
        <Link to="/notifications" className="rows">
          <Bell className="sidebar__icon" />
          <p className="sidebar__title">Notifications</p>
        </Link>
        {/* sell products */}
        <Link to="/sell" className="rows">
          <DollarSign className="sidebar__icon" />
          <p className="sidebar__title">Sell Products</p>
        </Link>
        {/* buy products */}
        <Link to="/buy" className="rows">
          <CreditCard className="sidebar__icon" />
          <p className="sidebar__title">Buy Products</p>
        </Link>
        {/* my products */}
        <Link to="/home" className="rows">
          <ArrowRightCircle className="sidebar__icon" />
          <p className="sidebar__title">Check Out</p>
        </Link>
        {/* interested */}
        <Link to="/interest" className="rows">
          <List className="sidebar__icon" />
          <p className="sidebar__title">Interested In</p>
        </Link>
        {/* settings */}
        <Link to="/setting" className="rows">
          <Settings className="sidebar__icon" />
          <p className="sidebar__title">Settings</p>
        </Link>
        {/* log out */}
        <Link onClick={signOut} className="rows">
          <LogOut className="sidebar__icon" />
          <p className="sidebar__title">Log Out</p>
        </Link>
      </div>
    </div>
  );
}
