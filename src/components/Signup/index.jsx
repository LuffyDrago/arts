import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

import { auth, handleUserProfile } from "./../../firebase/utils";

import Button from "./../forms/Button";
import FormInput from "../forms/FormInput";
import AuthWrapper from "./../AuthWrapper";

const Signup = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const reset = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      const err = ["Passwords Don't Match"];
      setErrors(err);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });

      reset();
      props.history.push("/");
    } catch (err) {
      //console.log(err);
    }
  };

  const configAuthWrapper = {
    headline: "Registration",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      {errors.length > 0 && (
        <ul>
          {errors.map((err, index) => {
            return <li key={index}>{err}</li>;
          })}
        </ul>
      )}

      <div className="formWrap">
        <form onSubmit={handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            // onChange={this.handleChange}
            handleChange={(e) => setDisplayName(e.target.value)}
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            // onChange={this.handleChange}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            // onChange={this.handleChange}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            // onChange={this.handleChange}
            handleChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button type="submit">Register</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(Signup);
