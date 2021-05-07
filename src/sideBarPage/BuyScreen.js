import React, { useState, useEffect } from "react";
import { Mail, Tag, Clipboard, Filter } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import db from "./config";

export default function BuyScreen() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [productName, setProductName] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const createUniqueId = () => {
    return Math.random().toString(36).substring(7);
  };

  const addProductRequest = () => {
    var randomRequestId = createUniqueId();
    db.collection("requested_books").add({
      user_id: email,
      book_name: productName,
      reason_to_request: productInfo,
      request_id: randomRequestId,
      quantity: productQuantity,
      book_status: "requested",
      date: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          {/* for sign in  */}

          <form action="#" className="sign-in-form">
            <h2 className="title">Buy Products</h2>
            {/*  */}
            <div className="input-field">
              <Mail className="icon__feather__for__style" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/*  */}
            <div className="input-field">
              <Tag className="icon__feather__for__style" />
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            {/*  */}
            <div className="input-field">
              <Clipboard className="icon__feather__for__style" />
              <input
                type="text"
                placeholder="Product Description"
                value={productInfo}
                onChange={(e) => setProductInfo(e.target.value)}
              />
            </div>
            {/*  */}
            <div className="input-field">
              <Filter className="icon__feather__for__style" />
              <input
                type="text"
                placeholder="Product Quantity"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
              />
            </div>
            {/*  */}
            <Link to="/sell">
              <button
                id="form__signin__button"
                className="btn solid"
                type="submit"
                onClick={addProductRequest}
              >
                Buy
              </button>
            </Link>
            {/*  */}
          </form>

          {/*------------for sign in-------------  */}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h1>Want to sell ?</h1>
            <p>
              You can sell world wide from
              <br />
              our platform!!!
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
