//Imports
import React, { useState } from "react";

import "./styles.css";

//Import components
import Input from "../../components/Input";
import SignNav from "../../components/SignNav";
import Button from "../../components/Button";

import { resetPassword } from "../../services/firebase";

//Hoc No Authorization
import withoutAuth from "../../hoc/withoutAuth.js";

function ResetPassword() {
  const [state, setState] = useState({
    email: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  //Manage state properties values
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //Change password
  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(state.email);
    setEmailSent(true);
  };

  return (
    <main className="reset-password-main gradient-background">
      <div className="reset-password-register">
        <SignNav />
        <h1 className="h3 mb-3 fw-normal">
          Insert your email to reset the password
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            id="email"
            label="Email"
            placeholder="Your email"
            value={state.email}
            handleChange={handleChange}
          />

          <Button title="Send email" />
        </form>
        {emailSent && <div>Email sent, please check your email.</div>}
      </div>
    </main>
  );
}

export default withoutAuth(ResetPassword);
