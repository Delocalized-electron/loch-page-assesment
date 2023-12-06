import React from "react";
import "./signUpForm.css";

function SignUpForm() {
  return (
    <div className="form-section">
      <form className="form">
        <input
          className="email-field"
          name="email"
          value={`Your email address`}
          type="email"
        ></input>
        <button className="submit-btn" type="submit">
          Get Started
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
