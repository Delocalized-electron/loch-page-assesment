import React from "react";
import "./testimonialBody.css";
import logo from "../../assets/logo.svg";
import TestimonialCard from "../testimonialCard/testimonialCard";

const TestimonialBody = () => {
  const data = [
    {
      name: "Jack F",
      company: "Ex Blackrock PM",
      comment:
        "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
    },
    {
      name: "Yash P",
      company: "Research, 3poch Crypto Hedge Fund",
      comment: `I use Loch everyday now. I don\'t think I could analyze crypto whale trends markets without it. I\'m addicted!`,
    },
    {
      name: "Shiv S",
      company: "Co-Founder Magik Labs",
      comment:
        "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
    },
  ];

  return (
    <div className="testimonial-body">
      <img src={logo} alt="logo"></img>
      <div className="test-cards">
        {data.map((obj) => {
          return (
            <TestimonialCard
              name={obj.name}
              company={obj.company}
              comment={obj.comment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialBody;
