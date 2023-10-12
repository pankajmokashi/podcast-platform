import React, { useState } from "react";
import Header from "../Components/Header";
import Signup from "../Components/Signup";
import Login from "../Components/Login";

function SignupSignin() {
  let [loginForm, setLoginForm] = useState(false);

  return (
    <div className="wrapper">
      <Header />
      {
        loginForm ?
        <Login loginForm={loginForm} setLoginForm={setLoginForm} /> :
        <Signup loginForm={loginForm} setLoginForm={setLoginForm} />
      }
    </div>
  );
}

export default SignupSignin;
