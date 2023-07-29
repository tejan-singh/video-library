import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import VideoCard from "../Components/VideoCard";

const VideoListing = () => {
  const {
    appState: { allVideos },
  } = useContext(AppContext);
  const { category } = useParams();

  const videos = allVideos.filter((video) => video.category === category);

  return (
    <>
      <Navbar />
      <h1> {category} Videos</h1>
      {videos.map((video) => (
        <VideoCard key={video._id} {...video} fromVideoListing />
      ))}
    </>
  );
};

export default VideoListing;
