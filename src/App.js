import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import Home from "./sideBarPage/Home";
import SellScreen from "./sideBarPage/SellScreen";
import Setting from "./sideBarPage/Setting";
import BuyScreen from "./sideBarPage/BuyScreen";
import NotificationScreen from "./sideBarPage/NotificationScreen";
import RecieverDetailsScreen from "./sideBarPage/RecieverDetailsScreen";
import InterestScreen from "./sideBarPage/InterestScreen";
import { ArrowLeft } from "react-feather";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/interest">
          <div className="home_screen">
            <SideBar />
            <InterestScreen />
          </div>
        </Route>
        <Route path="/buy">
          <div className="home_screen">
            <BuyScreen />
          </div>
        </Route>
        <Route path="/sell">
          <div className="home_screen">
            <SideBar />
            <SellScreen />
          </div>
        </Route>
        <Route path="/setting">
          <div className="home_screen">
            <Setting />
          </div>
        </Route>
        <Route path="/notifications">
          <div className="home_screen">
            <SideBar />
            <NotificationScreen />
          </div>
        </Route>
        <Route path="/recieverdetails">
          <div className="home_screen">
            <SideBar />
            <RecieverDetailsScreen />
          </div>
        </Route>
        <Route path="/home">
          <div className="home_screen">
            <SideBar />
            <Home />
          </div>
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
