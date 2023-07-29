import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import VideoCard from "../Components/VideoCard";

const Video = () => {
  const {
    appState: { allVideos },
    removeFromWatchLater,
    addToWatchLater,
  } = useContext(AppContext);
  const { videoId } = useParams();
  console.log(videoId);
  const { title, src, isWatchLater, _id } = allVideos.find(
    (video) => video._id === Number(videoId)
  );

  return (
    <>
      <Navbar />
      <iframe width="420" height="315" src={src}></iframe>
      <p>{title}</p>
      <button
        onClick={
          isWatchLater
            ? () => {
                removeFromWatchLater(_id);
              }
            : () => {
                addToWatchLater(_id);
              }
        }
      >
        {isWatchLater ? "remove from watch later" : "watch later"}
      </button>
    </>
  );
};

export default Video;
