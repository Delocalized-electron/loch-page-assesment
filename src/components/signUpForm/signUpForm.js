import React from "react";
import "./signUpForm.css";

function SignUpForm() {
  return (
    <div className="form-section">
      <form className="form">
        <p>
          Sign up for <br />
          exclusive access.
        </p>
        <input
          className="email-field"
          name="email"
          value={`Your email address`}
          type="email"
        ></input>

        <button className="submit-btn" type="submit">
          Get Started
        </button>
        <h5>You’ll receive an email with an invite link to join.</h5>
      </form>
    </div>
  );
}

export default SignUpForm;
