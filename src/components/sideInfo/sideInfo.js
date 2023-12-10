import React from "react";
import "./sideInfo.css";
import NotificationInfo from "../notificationInfo/notificationInfo";
import CardInfo from "../cardInfo/cardInfo";
import PortfolioSample from "../portfolioSample/portfolioSample";
import Testimonial from "../testimonials/testimonial";

function SideInfo() {
  return (
    <div className="side-info">
      <div className="notification-info">
        <NotificationInfo />
        <CardInfo />
      </div>
      <PortfolioSample />
      <Testimonial />
    </div>
  );
}

export default SideInfo;
