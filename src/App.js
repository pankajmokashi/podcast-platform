import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Podcast from "./Pages/Podcast";
import NewPodcast from "./Pages/NewPodcast";
import Profile from "./Pages/Profile";
import SignupSignin from "./Pages/SignupSignin";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/userSlice";
import PrivateRoutes from "./Components/PrivateRoutes";
import PodcastDetails from "./Pages/PodcastDetails";
import CreateAnEpisode from "./Pages/CreateAnEpisode";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsubscribeSnapshot = onSnapshot(
          doc(db, "users", user.uid),
          (userDoc) => {
            if (userDoc.exists()) {
              const userData = userDoc.data();
              dispatch(
                setUser({
                  name: userData.name,
                  email: userData.email,
                  uid: userData.uid,
                  // profilePic: userData.profilePic,
                })
              );
            }
          },
          (error) => {
            console.error("Error fetching user data:", error);
          }
        );

        return () => {
          unsubscribeSnapshot();
        };
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, [dispatch]);

  return (
    <div className="app">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignupSignin />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/podcasts" element={<Podcast />} />
            <Route path="/create-podcast" element={<NewPodcast />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/podcasts/:id" element={<PodcastDetails />} />
            <Route path="/podcasts/:id/create-episode" element={<CreateAnEpisode />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
