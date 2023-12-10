import React, { useState } from "react";

import "./signUpForm.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const emailChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const emailOnFocusHandler = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsValid(false);
    if (email.includes("@") && email.includes(".")) {
      setIsValid(true);
      window.location.href = "https://app.loch.one/welcome";
    }

    setEmail("");
  };
  const inputFieldClasses = `email-field ${isValid ? "" : "invalid-email"}`;

  return (
    <div className="form-section">
      <form className="form" onSubmit={submitHandler}>
        <p className="signup-info">
          Sign up for <br />
          exclusive access.
        </p>
        <input
          className={inputFieldClasses}
          name="email"
          value={email}
          onChange={emailChangeHandler}
          type="email"
          placeholder="Your email address"
          onFocus={emailOnFocusHandler}
        />
        {!isValid && (
          <p className="invalid-email-msg">Please enter a valid email</p>
        )}
        <button className="submit-btn" onClick={submitHandler} type="submit">
          Get Started
        </button>
        <h5>You’ll receive an email with an invite link to join.</h5>
      </form>
    </div>
  );
};

export default SignUpForm;
