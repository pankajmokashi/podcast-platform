import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { toast } from "react-toastify";
import EpisodeDetails from "../Components/Episode";
import AudioPlayer from "../Components/AudioPlayer";
import ExpandableText from "../Components/Episode/ExpandableText";

const podDesc = {
  fontSize: "0.9rem",
  color: "var(--grey)",
  fontWeight: "300",
  margin: "0",
  marginBottom: "1.5rem",
};

function PodcastDetails() {
  const [episodes, setEpisodes] = useState([]);
  const [podcast, setPodcast] = useState({});
  const [playingFile, setPlayingFile] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const getData = async () => {
        try {
          const docRef = doc(db, "podcasts", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setPodcast({ id: id, ...docSnap.data() });
            // toast.success("Pocast Found!");
          } else {
            toast.error("No Such Podcast!");
            navigate("/podcasts");
          }
        } catch (e) {
          toast.error(e.message);
        }
      };
      getData();
    }
  }, [id, navigate]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "podcasts", id, "episodes")),
      (querySnapshot) => {
        const episodeData = [];
        querySnapshot.forEach((doc) => {
          episodeData.push({ id: doc.id, ...doc.data() });
        });
        episodeData.reverse();
        setEpisodes(episodeData);
      },
      (error) => {
        console.error("Error fetching episodes", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [id]);

  const playFile = (file) => {
    setPlayingFile(file);
  };

  return (
    <>
      <Header />
      <div
        className="wrapper"
        style={{ alignItems: "flex-start", height: "calc(100vh - 11rem)" }}
      >
        {podcast.id && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h1 className="pod-title">{podcast.title}</h1>
              {podcast.createdBy === auth.currentUser.uid && (
                <button
                  className="episode-btn"
                  onClick={() => navigate(`/podcasts/${id}/create-episode`)}
                >
                  Create Episode
                </button>
              )}
            </div>
            <div className="banner-image">
              <img src={podcast.bannerImage} alt="banner" />
            </div>
            <ExpandableText
              text={podcast.description}
              maxLength={300}
              style={podDesc}
            />
            <h2 className="pod-title">Episodes :</h2>
            {episodes.length > 0 ? (
              <div className="episode-wrapper">
                {episodes.map((item, index) => (
                  <EpisodeDetails
                    key={index}
                    index={index + 1}
                    title={item.title}
                    description={item.description}
                    audioFile={item.audioFile}
                    onClick={playFile}
                  />
                ))}
              </div>
            ) : (
              <div>No Episodes</div>
            )}
          </>
        )}
      </div>
      {playingFile && (
        <AudioPlayer audioSrc={playingFile} image={podcast.smallImage} />
      )}
    </>
  );
}

export default PodcastDetails;
