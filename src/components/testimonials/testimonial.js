import React from "react";
import "./testimonial.css";
import TestimonialBody from "./testimonialBody";

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <p className="testimonial-title">Testimonials</p>
        <hr className="divider"></hr>
      </div>
      <TestimonialBody />
    </div>
  );
};

export default Testimonial;
