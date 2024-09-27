import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { doc, getDoc } from "firebase/firestore";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    if (email && password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();

        dispatch(
          setUser({
            name: userData.name,
            email: user.email,
            uid: user.uid,
            profileImage: userData.profileImage,
          })
        );

        navigate("/profile");
        setLoading(false);
        setEmail("");
        setPassword("");
        toast.success("Logged In Successfully!!");
      } catch (e) {
        toast.error("Inavalid Credentials");
        setLoading(false);
      }
    } else {
      toast.error("All Fields Are Mandatory!");
      setLoading(false);
    }
  };

  const resetPassword = () => {
    if (email) {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("Password reset email sent!");
        })
        .catch((e) => {
          toast.error(e.message);
        });
    } else {
      toast.error("Enter Email First!");
    }
  };

  return (
    <>
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
      <Button
        text={loading ? "loading..." : "Login"}
        onClick={handleLogin}
        disabled={loading}
      />
      <p className="p-login">
        <span onClick={resetPassword}>Reset/Forgot Password</span>
      </p>
    </>
  );
}

export default Login;
