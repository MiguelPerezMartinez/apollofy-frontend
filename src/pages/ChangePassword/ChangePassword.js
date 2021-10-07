import React, { useState } from "react";

//Components
import { Row, Col } from "react-bootstrap";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function ChangePassword() {
  const [state, setState] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = state.password;
    const confirmPassword = state.confirmPassword;
    if (password === confirmPassword) {
      console.log("Password Changed Succesfuly");
    } else {
      console.log("Something went wrong when you changed your password");
    }
  };
  return (
    <main className="login-main gradient-background">
      <Row>
        <Col xs={12} md={6} className="login-register">
          <h1 className="h3 mb-3 mt-2 fw-normal">
            Please change your password{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <Input
              type="password"
              name="password"
              id="password"
              label="New Password"
              value={state.password}
              placeholder="New Password"
              handleChange={handleChange}
            />

            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              label="Confirm Password"
              value={state.confirmPassword}
              placeholder="Confirm password"
              handleChange={handleChange}
            />
            <div className="login-register-button-centered">
              <Button title="Change Password" />
            </div>
          </form>
        </Col>
      </Row>
    </main>
  );
}
