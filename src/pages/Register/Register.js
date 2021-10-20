//Imports
import React, { useState, useRef } from "react";

import "./register.css";
import * as $ from "jquery";
import { registerNewUser } from "../../services/firebase";
import { registerInApi, getByEmail } from "../../services/api/index";

//Import components
import { Row, Col } from "react-bootstrap";
import Button from "../../components/Button";
import Input from "../../components/Input";
import SignNav from "../../components/SignNav";
import validate from "jquery-validation";
//Hoc No Authorization
import withoutAuth from "../../hoc/withoutAuth.js";

function Register() {
  const formRegister = useRef();
  const [userExist, setUserExist] = useState();
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //Manage values of state properties
  function handleChange(e) {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  }

  //Register user on firebase and apiserver
  async function handleSubmit(e) {
    e.preventDefault();
    $(formRegister.current).validate({
      rules: {
        email: { required: true },
        password: { required: true },
        firstname: { required: true },
        lastname: { required: true },
        username: { required: true },
        confirmPassword: { required: true },
      },
      messages: {
        email: { required: "Email is required" },
        password: { required: "Password is required" },
        firstname: { required: "Firstname is required" },
        lastname: { required: "Lastname is required" },
        username: { required: "Username is required" },
        confirmPassword: { required: "ConfirmPassword is required" },
      },
      submitHandler: async () => {
        const { email, password, confirmPassword } = registerData;
        if (confirmPassword === password) {
          console.log("submit ", registerData);
          const userEmailExist = await getByEmail(email);
          const userExist = userEmailExist.data.currentUser;
          if (userExist != null) {
            setUserExist(
              "We detected that the user with that email already exist",
            );
          } else {
            const { user } = await registerNewUser(email, password);
            console.log("the userFirebase: ", user);
            const userApi = await registerInApi(registerData, user.uid);
            console.log("the userApi: ", userApi);
          }
        } else {
          console.log("los datos no coinciden");
        }
      },
    });
  }

  return (
    <main className="login-main gradient-background">
      {userExist ? (
        <div className="errorModalREACT">{userExist}</div>
      ) : (
        <div></div>
      )}

      <Row>
        <Col xs={12} md={6} className="login-register">
          <SignNav />
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
          <form ref={formRegister} onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} md={6}>
                <Input
                  type="text"
                  id="firstname"
                  label="Firstname"
                  value={registerData.firstname}
                  placeholder="Type firstname"
                  handleChange={handleChange}
                />
              </Col>
              <Col xs={12} md={6}>
                <Input
                  type="text"
                  id="lastname"
                  label="Lastname"
                  value={registerData.lastname}
                  placeholder="Type lastname"
                  handleChange={handleChange}
                />
              </Col>
            </Row>
            <Input
              type="text"
              id="username"
              label="Username"
              value={registerData.username}
              placeholder="Type username"
              handleChange={handleChange}
            />
            <Input
              type="email"
              id="email"
              label="Email"
              value={registerData.email}
              placeholder="Type email"
              handleChange={handleChange}
            />
            <Input
              type="password"
              id="password"
              label="Password"
              value={registerData.password}
              placeholder="Type password"
              handleChange={handleChange}
            />
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              label="Confirm password"
              value={registerData.confirmPassword}
              placeholder="Type password"
              handleChange={handleChange}
            />

            <div className="login-register-button-centered">
              <Button title="Register" />
            </div>
          </form>
        </Col>
      </Row>
    </main>
  );
}

export default withoutAuth(Register);
