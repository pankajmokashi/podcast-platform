import React from "react";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import Button from "../Components/Button";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import PodcastCard from "../Components/Podcast";

function Profile() {
  const user = useSelector((state) => state.user.user);
  const podcasts = [];

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User logged Out!");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        {user && (
          <>
            <h1>{user.email}</h1>
            <h1>{user.uid}</h1>
            <Button text={"Logout"} onClick={handleLogout} />

            <h2>Profile</h2>
            <div className="podcast-flex">
              <PodcastCard
                title={user.name}
                smallImage={"https://source.unsplash.com/random/?profile"}
                id="1"
              />
            </div>
            <h2 className="title">Your Podcasts</h2>
            <div className="podcast-flex">
              {podcasts.length > 0 ? (
                <div className="podcast-flex">
                  {podcasts.map((item) => (
                    <PodcastCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      smallImage={item.smallImage}
                    />
                  ))}
                </div>
              ) : (
                <>No Podcast found</>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Profile;
