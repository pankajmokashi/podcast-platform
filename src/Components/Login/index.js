import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

function Login({ loginForm, setLoginForm }) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit() {
    console.log(email, password);
  }

  return (
    <div className="signup">
      <h2
        className="title"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Login
      </h2>
      <form>
        <Input
          type={"email"}
          placeholder={"Email"}
          state={email}
          setState={setEmail}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          state={password}
          setState={setPassword}
        />
        <Button text={"Login"} onClick={handleSubmit} disabled={false} />
      </form>

      <p className="p-login" onClick={() => setLoginForm(!loginForm)}>
        Or Don't Have An Account? Signup.
      </p>
    </div>
  );
}

export default Login;
