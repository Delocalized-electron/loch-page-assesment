import React from "react";
import "./portfolioSample.css";
import portfolio from "../../assets/portfolioSample.png";
import PortfolioText from "./portfolioText";

const PortfolioSample = () => {
  return (
    <div className="portfolio-sample">
      <img src={portfolio} alt="Portfolio sample" />
      <PortfolioText />
    </div>
  );
};

export default PortfolioSample;
