import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import FileInput from "../Input/FileInput";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

function CreatePodcast() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [smallImage, setSmallImage] = useState("");
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    if (title && description && bannerImage && smallImage) {
      try {
        const bannerImageRef = ref(
          storage,
          `podcast/${auth.currentUser.uid}/${Date.now()}`
        );
        await uploadBytes(bannerImageRef, bannerImage);
        const bannerImageURL = await getDownloadURL(bannerImageRef);

        const smallImageRef = ref(
          storage,
          `podcast/${auth.currentUser.uid}/${Date.now()}`
        );
        await uploadBytes(smallImageRef, smallImage);
        const smallImageURL = await getDownloadURL(smallImageRef);

        const podcastData = {
          title,
          description,
          smallImage: smallImageURL,
          bannerImage: bannerImageURL,
          createdBy: auth.currentUser.uid,
        };

        const docRef = await addDoc(collection(db, "podcasts"), podcastData);

        Navigate(`/podcast/${docRef.id}`);
        setTitle("");
        setDescription("");
        setSmallImage(null);
        setBannerImage(null);
        toast.success("Podcast Created Successfully!");
        setLoading(false);
      } catch (e) {
        toast.error(e.message);
        setLoading(false);
      }
    } else {
      toast.error("All Fields Are Mandatory!");
      setLoading(false);
    }
  };
  const handleSmallImage = (file) => {
    setSmallImage(file);
  };
  const handleBannerImage = (file) => {
    setBannerImage(file);
  };

  return (
    <>
      <Input
        type={"text"}
        placeholder={"Podcast Title"}
        state={title}
        setState={setTitle}
        required={true}
      />
      <Input
        type={"text"}
        placeholder={"Podcast Discription"}
        state={description}
        setState={setDescription}
        required={true}
      />
      <FileInput
        text="Upload Small Image"
        accept={"image/*"}
        id="small-image"
        fileHandleFnc={handleSmallImage}
        required={true}
      />
      <FileInput
        text="Upload Banner Image"
        accept={"image/*"}
        id="banner-image"
        fileHandleFnc={handleBannerImage}
        required={true}
      />
      <Button
        text={loading ? "loading..." : "Create Now"}
        onClick={handleSubmit}
        disabled={false}
      />
    </>
  );
}

export default CreatePodcast;
