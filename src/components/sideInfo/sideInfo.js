import React from "react";
import "./sideInfo.css";
import NotificationInfo from "../notificationInfo/notificationInfo";
import CardInfo from "../cardInfo/cardInfo";
import PortfolioSample from "../portfolioSample/portfolioSample";
import Testimonial from "../testimonials/testimonial";
import Slider from "react-slick";
import { isMobile } from "react-device-detect";

function SideInfo() {
  return (
    <>
      {isMobile && (
        <Slider
          dots={true} // Enable navigation dots
          infinite={true} // Loop slides continuously
          speed={500} // Transition speed
        >
          <div className="side-info">
            <div className="notification-info">
              <NotificationInfo />
              <CardInfo />
            </div>
            <PortfolioSample />
            <Testimonial />
          </div>
        </Slider>
      )}
      {!isMobile && (
        // Render flexbox container directly for non-mobile
        <div className="flex-container">
          <div className="side-info">
            <div className="notification-info">
              <NotificationInfo />
              <CardInfo />
            </div>
            <PortfolioSample />
            <Testimonial />
          </div>
        </div>
      )}
    </>
  );
}

export default SideInfo;
