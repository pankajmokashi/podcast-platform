import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { setPodcasts } from "../slices/podcastSlice";
import PodcastCard from "../Components/Podcast";
import Input from "../Components/Input";

function Podcast() {
  const [search, setSearch] = useState("");
  const podcasts = useSelector((state) => state.podcasts.podcasts);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "podcasts")),
      (querySnapshot) => {
        const podcastsData = [];
        querySnapshot.forEach((doc) => {
          podcastsData.push({ id: doc.id, ...doc.data() });
        });
        dispatch(setPodcasts(podcastsData));
      },
      (error) => {
        console.error("Error fetching podcasts:", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  var filteredPodcasts = podcasts.filter((item) =>
    item.title.trim().toLowerCase().includes(search.trim().toLocaleLowerCase())
  );

  return (
    <>
      <Header />
      <div className="wrapper">
        <h2>Discover Podcasts</h2>
        <Input
          type="text"
          placeholder="Search"
          state={search}
          setState={setSearch}
          required={false}
        />
        {filteredPodcasts.length > 0 ? (
          <div className="podcast-flex">
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
          <>{search ? "Podcast Not found" : "No Podcasts On The Platform"}</>
        )}
      </div>
    </>
  );
}

export default Podcast;
