import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Podcast from "./Pages/Podcast";
import NewPodcast from "./Pages/NewPodcast";
import Profile from "./Pages/Profile";
import SignupSignin from "./Pages/SignupSignin";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignupSignin />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="newpodcast" element={<NewPodcast />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
