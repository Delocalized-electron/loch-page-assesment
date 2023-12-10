import React from "react";
import "./portfolioText.css";
import eye from "../../assets/Eye.svg";

const PortfolioText = () => {
  return (
    <div className="portfolio-text-info">
      <img src={eye} alt="eye"></img>
      <p className="info-head">Watch what the whales are doing</p>
      <p className="info-text">
        All whales are not equal. Know exactly what the whales impacting YOUR
        portfolio are doing.
      </p>
    </div>
  );
};

export default PortfolioText;
