import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sideInfo.css";
import NotificationInfo from "../notificationInfo/notificationInfo";
import CardInfo from "../cardInfo/cardInfo";
import PortfolioSample from "../portfolioSample/portfolioSample";
import Testimonial from "../testimonials/testimonial";
import { isMobile } from "react-device-detect";

function SideInfo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: function (i) {
      return <div className="custom-dot"></div>;
    },
  };
  if (isMobile) {
    console.log(isMobile);
    return (
      <div className="side-info">
        <Slider {...settings}>
          <div className="notification-info">
            <NotificationInfo />
            <CardInfo />
          </div>
          <PortfolioSample />
          <Testimonial />
        </Slider>
      </div>
    );
  }

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
