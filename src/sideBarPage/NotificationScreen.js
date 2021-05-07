import React, { useState, useEffect } from "react";
import "./Home.css";
import FlatList from "flatlist-react";
import Notification from "./Notification";
import firebase from "firebase";
import db from "./config";
import "./SellScreen.css";
import Header from "../Header";

function NotificationScreen() {
  const [notification, setNotification] = useState([]);
  const [cart, setCart] = useState([]);
  var user = firebase.auth().currentUser;
  var email;

  useEffect(() => {
    getEmail();
    getNotificationList();
    getCartList();
  }, [getEmail]);

  function getEmail() {
    if (user != null) {
      email = user.email;
    }
  }

  function getNotificationList() {
    db.collection("all_notifications")
      .where("notification_status", "==", "unread")
      .where("targeted_user_id", "==", email)
      .onSnapshot(function (querySnapshot) {
        setNotification(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            bookName: doc.data().book_name,
            targetedUserId: doc.data().targeted_user_id,
            donorId: doc.data().donor_id,
            message: doc.data().message,
          }))
        );
      });
  }

  function getCartList() {
    db.collection("all_donations")
      .where("donor_id", "==", email)
      .onSnapshot(function (querySnapshot) {
        setCart(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            bookName: doc.data().book_name,
            requested_by: doc.data().targeted_user_id,
            request_status: doc.data().donor_id,
          }))
        );
      });
  }

  return (
    <div>
      <Header
        notificationLength={notification.length}
        cartLength={cart.length}
      />
      <div className="sell__screen">
        <div
          className="body"
          style={{
            width: "80vw",
            marginTop: "-25px",
          }}
        >
          {notification.map((notification) => (
            <Notification
              book_name={notification.bookName}
              donorId={notification.donorId}
              message={notification.message}
              id={notification.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationScreen;
