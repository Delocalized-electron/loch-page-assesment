import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sideInfo.css";
import NotificationInfo from "../notificationInfo/notificationInfo";
import CardInfo from "../cardInfo/cardInfo";
import PortfolioSample from "../portfolioSample/portfolioSample";
import Testimonial from "../testimonials/testimonial";

function SideInfo() {
  const [checkMobile, setCheckMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setCheckMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    customPaging: function (i) {
      return <div className="custom-dot"></div>;
    },
  };
  if (checkMobile) {
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
