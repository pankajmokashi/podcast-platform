import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Input from "../Components/Input";
import FileInput from "../Components/Input/FileInput";
import Button from "../Components/Button";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function CreateAnEpisode() {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const podcastDoc = await getDoc(doc(db, "podcasts", id));
        if (podcastDoc.exists()) {
          setPodcast({ id: podcastDoc.id, ...podcastDoc.data() });
        }
      } catch (e) {
        toast.error(e.message);
      }
    };

    fetchPodcast();
  }, [id]);

  const handleAudioFile = (file) => {
    setAudioFile(file);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (title && description && audioFile) {
      try {
        const audioRef = ref(
          storage,
          `podcast-episodes/${auth.currentUser.uid}/${Date.now()}`
        );
        await uploadBytes(audioRef, audioFile);

        const audioURL = await getDownloadURL(audioRef);
        const episodeData = {
          title,
          description,
          audioFile: audioURL,
        };

        await addDoc(collection(db, "podcasts", id, "episodes"), episodeData);

        navigate(`/podcasts/${id}`);
        setTitle("");
        setDescription("");
        setAudioFile(null);
        toast.success("Audio Created Successfully!");
      } catch (e) {
        toast.error(e.message);
        setLoading(false);
      }
    } else {
      toast.error("All Fields Are Required!");
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        {podcast ? (
          <>
            <h2 className="title">Create Episode for {podcast.title}</h2>
            <Input
              type={"text"}
              placeholder={"Episode Title"}
              state={title}
              setState={setTitle}
              required={true}
            />
            <Input
              type={"text"}
              placeholder={"Episode Discription"}
              state={description}
              setState={setDescription}
              required={true}
            />
            <FileInput
              text="Upload Audio File"
              accept={"audio/*"}
              id="audio-file"
              fileHandleFnc={handleAudioFile}
              required={true}
            />
            <Button
              text={loading ? "loading..." : "Create Now"}
              onClick={handleSubmit}
              disabled={false}
            />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default CreateAnEpisode;
