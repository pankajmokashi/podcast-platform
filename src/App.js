import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Podcast from "./Pages/Podcast";
import NewPodcast from "./Pages/NewPodcast";
import Profile from "./Pages/Profile";
import SignupSignin from "./Pages/SignupSignin";
// import PodcastDetails from "./Pages/PodcastDetails";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignupSignin />} />
          {/* <Route element={<></>}> */}
          <Route path="/podcasts" element={<Podcast />} />
          <Route path="/create-podcast" element={<NewPodcast />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/podcast/:podcastId" element={<PodcastDetails />} /> */}
          {/* <Route 
            path="/podcast/:podcastId/create-episode"
            element={<></>}
          /> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
