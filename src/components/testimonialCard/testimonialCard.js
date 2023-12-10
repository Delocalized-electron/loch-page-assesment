import React from "react";
import "./testimonialCard.css";

const TestimonialCard = (props) => {
  const data = {
    name: props.name,
    company: props.company,
    comment: props.comment,
  };
  console.log(data);
  console.log(props);
  return (
    <div className="testimonial-card">
      <div className="testimonial-meta">
        <p className="test-name">{data.name}</p>
        <p className="test-company">{data.company}</p>
      </div>
      <div className="testimonial-comment">{`"${data.comment}"`}</div>
    </div>
  );
};

export default TestimonialCard;
