import Header from "../Components/Header";
import { useSelector } from "react-redux";
import Button from "../Components/Button";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import PodcastCard from "../Components/Podcast";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";

function Profile() {
  const user = useSelector((state) => state.user.user);
  const [podcasts, setPodcasts] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "podcasts")),
      (querySnapshot) => {
        const podcastsData = [];
        querySnapshot.forEach((doc) => {
          podcastsData.push({ id: doc.id, ...doc.data() });
        });
        setPodcasts(podcastsData);
      },
      (error) => {
        console.error("Error fetching podcasts:", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User logged Out!");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  console.log("user", user);
  console.log("podcasts", podcasts);
  const filteredPodcasts = podcasts.filter((item) => (
    item.createdBy === user.uid
  ))
  console.log("filteredPodcasts", filteredPodcasts);

  return (
    <>
      <Header />
      <div className="wrapper">
        {user && (
          <>
            <h2>Profile</h2>
            <div className="podcast-flex" style={{ padding: 0 }}>
              <div className="profile-card">
                <img
                  className="profile-image"
                  src={user.profileImage}
                  alt="profileImage"
                />
                <p className="title">{user.name}</p>
              </div>
            </div>
            <h2 style={{ margin: 0, marginTop: "2.5rem" }}>Your Podcasts</h2>
              {filteredPodcasts.length > 0 ? (
                <div className="podcast-flex" style={{ padding: "2rem 0"}}>
                  {filteredPodcasts.map((item) => (
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
          </>
        )}
        <Button text={"Logout"} onClick={handleLogout} />
      </div>
    </>
  );
}

export default Profile;
