import React, { useState } from "react";
import Header from "../Components/Header";
import Signup from "../Components/Signup";
import Login from "../Components/Login";

function SignupSignin() {
  let [flag, setFlag] = useState(false);

  return (
    <>
      <Header />
      {flag ? (
        <div className="wrapper">
          <h2>Login</h2>
          <Login />
          <p className="p-login">
            <span onClick={() => setFlag(!flag)}>
              Or Don't Have An Account? Signup.
            </span>
          </p>
        </div>
      ) : (
        <div className="wrapper">
          <h2>Signup</h2>
          <Signup />
          <p className="p-login">
            <span onClick={() => setFlag(!flag)}>
              Or Have An Account Already? Login.
            </span>
          </p>
        </div>
      )}
    </>
  );
}

export default SignupSignin;
