import React, { useState } from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Input from "../Components/Input";

function NewPodcast() {
  let [title, setTitle] = useState("");
  let [discription, setDiscription] = useState("");
  let [banner, setBanner] = useState("");
  let [smallImage, setSmallImage] = useState("");

  function handleSubmit() {
    console.log("hi");
  }

  return (
    <div className="wrapper">
      <Header />
      <div className="signup">
        <h2
          className="title"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Create a Podcast
        </h2>
        <form>
          <Input
            type={"text"}
            placeholder={"Podcast Title"}
            state={title}
            setState={setTitle}
          />
          <Input
            type={"text"}
            placeholder={"Podcast Discription"}
            state={discription}
            setState={setDiscription}
          />
          <Input
            type={"text"}
            placeholder={"Banner Image"}
            state={banner}
            setState={setBanner}
          />
          <Input
            type={"text"}
            placeholder={"Small image"}
            state={smallImage}
            setState={setSmallImage}
          />
          <Button text={"Create Now"} onClick={handleSubmit} disabled={false} />
        </form>
      </div>
    </div>
  );
}

export default NewPodcast;
