import React, { useContext } from "react";
import Navbar from "./Navbar";
import { AppContext } from "../Context/AppContext";
import VideoCard from "../Components/VideoCard";

const WatchLater = () => {
  const {
    appState: { watchLater },
  } = useContext(AppContext);
  return (
    <div>
      <Navbar />
      WatchLater
      {watchLater.map((video) => (
        <VideoCard key={video._id} {...video} />
      ))}
    </div>
  );
};

export default WatchLater;
