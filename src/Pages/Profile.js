import React from "react";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import Button from "../Components/Button";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

function Profile() {
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    signOut(auth).then(() => {
      toast.success("User logged Out!");
    }).catch((e) => {
      toast.error(e.message);
    })
  }

  return (
    <>
      <Header />
      <div className="profile">
        {user && (
          <>
            <h1>{user.email}</h1>
            <h1>{user.uid}</h1>
            <Button text={"Logout"} onClick={handleLogout} />
          </>
        )}
      </div>
    </>
  );
}

export default Profile;
