import React from "react";
import "./notificationCard.css";

const NotificationCard = (props) => {
  return (
    <div className="card-layout" id={props.id}>
      {props.children}
    </div>
  );
};

export default NotificationCard;
