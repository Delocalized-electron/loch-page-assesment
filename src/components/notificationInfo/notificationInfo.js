import React from "react";
import "./notificationInfo.css";
import bellPng from "../../assets/bell.svg";

const NotificationInfo = () => {
  return (
    <>
      <div className="notification-text-info">
        <img src={bellPng} alt="Notification"></img>
        <p className="info-head">
          Get notified when a highly correlated whale makes a move
        </p>
        <p className="info-text">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
    </>
  );
};

export default NotificationInfo;
