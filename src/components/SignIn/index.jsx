import React, { useState } from "react";
import "./styles.scss";
import { Link, withRouter } from "react-router-dom";
import AuthWrapper from "./../AuthWrapper";
import Buttons from "./../forms/Button";
import Button from "./../forms/Button";
import FormInput from "../forms/FormInput";
import { signInWithGoogle, auth } from "./../../firebase/utils";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
      props.history.push("/");
    } catch (err) {
      //console.log(err)
    }
  };

  const configAuthWrapper = {
    headline: "Login",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">Login </Button>
          <br />
          <br />
          <div className="socialSignin">
            <div className="row">
              <Buttons onClick={signInWithGoogle}>Sign in with Google</Buttons>
            </div>
          </div>

          <div className="links">
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(SignIn);
