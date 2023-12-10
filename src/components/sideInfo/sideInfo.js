import React from "react";
import "./sideInfo.css";
import NotificationInfo from "../notificationInfo/notificationInfo";
import CardInfo from "../cardInfo/cardInfo";
import PortfolioSample from "../portfolioSample/portfolioSample";

function SideInfo() {
  return (
    <div>
      <div className="side-info">
        <NotificationInfo />
        <CardInfo />
      </div>

      <PortfolioSample />
    </div>
  );
}

export default SideInfo;
