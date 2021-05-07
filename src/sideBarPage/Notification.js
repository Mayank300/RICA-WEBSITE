import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import db from "./config";
import { Trash2, XCircle, CheckCircle, StopCircle } from "react-feather";

export default function Notification({
  book_name,
  id,
  donorId,
  message,
  notification_status,
}) {
  function deleteNotification() {
    db.collection("all_notifications").doc(id).delete();
  }

  function markAsRead() {
    db.collection("all_notifications").doc(id).update({
      notification_status: "read",
    });
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ListItemText
              primary={"Product Name :"}
              secondary={book_name}
              style={{ display: "flex", textIndent: "5px" }}
            />
            <ListItemText
              primary={donorId}
              secondary={message}
              style={{ display: "flex", textIndent: "5px" }}
            />
          </div>
        </ListItem>

        <Button
          style={{
            width: "200px",
          }}
          onClick={markAsRead}
        >
          <p style={{ marginRight: "10px", marginLeft: "10px" }}>
            Mark as read
          </p>
          {notification_status == "unread" ? (
            <XCircle />
          ) : (
            <CheckCircle style={{ width: "35px", height: "35px" }} />
          )}
        </Button>
      </div>
    </div>
  );
}
