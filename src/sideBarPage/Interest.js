import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import db from "./config";
import { XCircle, Check, StopCircle, Trash2 } from "react-feather";
import { Link, useHistory } from "react-router-dom";

export default function Interest({ book_name, reason_to_request, id }) {
  function deleteInterestList() {
    db.collection("interested_products").doc(id).delete();
  }

  return (
    <div>
      <div
        className="list__container"
        style={{
          display: "flex",
          borderBottom: "1px solid lightgrey",
          borderRight: "1px solid lightgrey",
          width: "80vw",
        }}
      >
        <ListItem>
          <StopCircle
            style={{ marginRight: "10px", width: "20px", height: "20px" }}
          />
          <div
            style={{
              flexDirection: "column",
              textAling: "left",
            }}
          >
            <ListItemText
              primary={"Product Name :"}
              secondary={book_name}
              style={{ display: "flex", textIndent: "5px" }}
            />
            <ListItemText
              primary={"Description :"}
              secondary={reason_to_request}
              style={{ display: "flex", textIndent: "5px" }}
            />
            <ListItemText
              primary={"Status :"}
              secondary={"Interested"}
              style={{ display: "flex", textIndent: "5px" }}
            />
          </div>
        </ListItem>
        <Button
          style={{ display: "flex", marginTop: "40px", margin: "20px" }}
          onClick={() => {
            deleteInterestList();
          }}
        >
          <p style={{ marginRight: "10px" }}>Delete</p>
          <Trash2 />
        </Button>
      </div>
    </div>
  );
}
