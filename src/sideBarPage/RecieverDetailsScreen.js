import React, { useState, useEffect } from "react";
import firebase from "firebase";
import db from "./config";
import RecieverDetails from "./RecieverDetails";
import "./SellScreen.css";
import Header from "../Header";
import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";

export default function RecieverDetailsScreen() {
  const [product, setProduct] = useState([]);
  const [notification, setNotification] = useState([]);
  const [cart, setCart] = useState([]);
  var user = firebase.auth().currentUser;
  var email;

  useEffect(() => {
    getEmail();
    getProductList();
    getNotificationList();
    getCartList();
  }, [getEmail]);

  function getProductList() {
    db.collection("reciever_info_for_product")
      .where("status", "==", "interested")
      .onSnapshot(function (querySnapshot) {
        setProduct(
          querySnapshot.docs.map((doc) => ({
            book_name: doc.data().book_name,
            book_status: doc.data().status,
            reason_to_request: doc.data().reason_to_request,
            id: doc.id,
          }))
        );
      });
  }

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
        ArrowLeft={
          <ArrowLeft
            style={{
              width: "35px",
              height: "35px",
              color: "black",
              marginRight: "20px",
              marginLeft: "20px",
              marginTop: "15px",
            }}
          />
        }
        notificationLength={notification.length}
        cartLength={cart.length}
      />
      <div className="sell__screen">
        <div className="body" style={{ marginTop: "-25px" }}>
          {product.map((product) => (
            <RecieverDetails
              book_name={product.book_name}
              book_status={product.book_status}
              reason_to_request={product.reason_to_request}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
