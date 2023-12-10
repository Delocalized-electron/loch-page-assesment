import React, { useEffect, useRef } from "react";
import NotificationCard from "../notificationCard/notificationCard";
import bellNotification from "../../assets/bell-notification.svg";
import barChart from "../../assets/bar-chart-2.svg";
import checkMark from "../../assets/checkmark.svg";
import price from "../../assets/dollar.svg";
import "./cardInfo.css";
import duration from "../../assets/duration.svg";
import clock from "../../assets/clock.svg";

const CardInfo = (props) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (scroller) {
      const cardWidth = scroller.firstElementChild.offsetWidth;
      const totalWidth =
        scroller.scrollWidth - scroller.clientWidth + cardWidth;
      const animationDuration = totalWidth / 50;

      // Duplicate the entire content to create a seamless loop
      const originalContent = scroller.innerHTML;
      scroller.innerHTML = originalContent + originalContent + originalContent;

      scroller.style.setProperty(
        "--animation-duration",
        `${animationDuration}s`
      );
    }
  }, []);

  return (
    <div className="card-info scroller" ref={scrollerRef}>
      <NotificationCard id="first-card">
        <div className="bell-save">
          <img src={bellNotification} alt="notification bell"></img>
          <p>save</p>
        </div>
        <div>
          <p className="notification-text">
            We’ll be sending notifications to you here
          </p>
          <div className="mail-box">
            <p>hello@gmail.com</p>
          </div>
        </div>
      </NotificationCard>
      <NotificationCard>
        <div className="bell-save">
          <img src={barChart} alt="bar chart"></img>
          <img src={checkMark} alt="check mark"></img>
        </div>
        <div>
          <p className="notification-text" id="card-2-text">
            Notify me when any wallets move more than
          </p>
          <img src={price} alt="dollar"></img>
        </div>
      </NotificationCard>
      <NotificationCard>
        <div className="bell-save">
          <img src={clock} alt="clock"></img>
          <img src={checkMark} alt="check mark"></img>
        </div>
        <div>
          <p className="notification-text" id="card-3-text">
            Notify me when any wallet dormant for
            <br />
            <img src={duration} alt="duration"></img>
            <br />
            becomes active
          </p>
        </div>
      </NotificationCard>
    </div>
  );
};

export default CardInfo;
