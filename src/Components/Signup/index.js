import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async () => {
    setLoading(true);

    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          const user = userCredential.user;
          await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: user.email,
            uid: user.uid,
            // profilePic: fileURL,
          });

          dispatch(
            setUser({
              name: name,
              email: user.email,
              uid: user.uid,
            })
          );

          navigate("/profile");
          setLoading(false);
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          toast.success("User Created!");
        } catch (e) {
          toast.error(e.message);
          setLoading(false);
        }
      } else {
        toast.error("Password and Confirm Password Doesn't Match!");
        setLoading(false);
      }
    } else {
      toast.error("All Fields Are Mandatory!");
      setLoading(false);
    }
  };

  return (
    <>
      <Input
        type={"text"}
        placeholder={"Full Name"}
        state={name}
        setState={setName}
        required={true}
      />
      <Input
        type={"email"}
        placeholder={"Email"}
        state={email}
        setState={setEmail}
        required={true}
      />
      <Input
        type={"password"}
        placeholder={"Password"}
        state={password}
        setState={setPassword}
        required={true}
      />
      <Input
        type={"password"}
        placeholder={"Confirm Password"}
        state={confirmPassword}
        setState={setConfirmPassword}
        required={true}
      />
      <Button
        text={loading ? "loading..." : "Signup now"}
        onClick={handleSignup}
        disabled={loading}
      />
    </>
  );
}

export default Signup;
