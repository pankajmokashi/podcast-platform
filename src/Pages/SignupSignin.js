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
        <div className="signup">
          <h2
            className="title"
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Login
          </h2>
          <Login />
          <p className="p-login">
            <span onClick={() => setFlag(!flag)}>
              Or Don't Have An Account? Signup.
            </span>
          </p>
        </div>
      ) : (
        <div className="signup">
          <h2
            className="title"
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            Signup
          </h2>
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
