import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import db from "./config";
import { LogIn, XCircle, Check, StopCircle, Trash2 } from "react-feather";
import { Link, useHistory } from "react-router-dom";

export default function RecieverDetails({
  book_name,
  book_status,
  reason_to_request,
  id,
}) {
  function deleteList() {
    db.collection("reciever_info_for_product").doc(id).delete();
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
          <div style={{ flexDirection: "column", textAling: "left" }}>
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
              secondary={book_status ? "Interested" : "Not Interested"}
              style={{ display: "flex", textIndent: "5px" }}
            />
          </div>
        </ListItem>

        <Button
          style={{ display: "flex", marginTop: "40px", margin: "20px" }}
          onClick={() => {
            deleteList();
          }}
        >
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "10px" }}>Delete</p>
            <Trash2 />
          </div>
        </Button>
      </div>
    </div>
  );
}
