import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

function AudioPlayer({ audioSrc, image }) {
  const [duration, setDuration] = useState("");
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(1);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // useEffect(() => {
  //   const audio = audioRef.current;
  //   audio.addEventListner("timeupdate", handleTimeUpdate);
  //   audio.addEventListner("loadMetaData", handleLoadMetaData);
  //   audio.addEventListner("ended", handleEnded);

  //   return () => {
  //     audio.removeEventListner("timeupdate", handleTimeUpdate);
  //     audio.removeEventListner("loadMetaData", handleLoadMetaData);
  //     audio.removeEventListner("ended", handleEnded);
  //   };
  // });

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }

  const toggleMute = () => {
    setIsMuted(!isMuted);
  }

  const audioRef = useRef();
  return (
    <div className="audio-player">
      <img src={image} className="audio-player-image" alt="player-img" />
      <audio ref={audioRef} src={audioSrc} />
      <span onClick={togglePlay} style={{ cursor: "pointer"}}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </span>
      <div className="duration-flex">
        <p>0:00</p>
        <input
          type="range"
          onChange={handleDuration}
          className="duration-range "
        />
        <p>-22:00</p>
      </div>
      <span onClick={toggleMute} style={{ cursor: "pointer" }}>
        {isMuted ? <FaVolumeUp /> : <FaVolumeMute />}
      </span>
      <input
          type="range"
          onChange={handleVolume}
          className="volume-range"
        />
    </div>
  );
}

export default AudioPlayer;
