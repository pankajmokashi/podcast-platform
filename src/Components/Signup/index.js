import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

function Signup({ loginForm, setLoginForm }) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit() {
    console.log(name, email, password, confirmPassword);
  }

  return (
    <div className="signup">
      <h2
        className="title"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Signup
      </h2>
      <form>
        <Input
          type={"text"}
          placeholder={"Full Name"}
          state={name}
          setState={setName}
        />
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
        <Input
          type={"password"}
          placeholder={"Confirm Password"}
          state={confirmPassword}
          setState={setConfirmPassword}
        />
        <Button text={"Signup Now"} onClick={handleSubmit} disabled={false} />
      </form>

      <p className="p-login" onClick={() => setLoginForm(!loginForm)}>
        Or Have An Account Already? Login.
      </p>
    </div>
  );
}

export default Signup;
