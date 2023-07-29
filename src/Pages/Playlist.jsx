import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import VideoCard from "../Components/VideoCard";

const Playlist = () => {
  const {
    appState: { allVideos },
  } = useContext(AppContext);

  const { playlistName } = useParams();

  const videos = allVideos.filter((video) => {
    return video.playlist === playlistName;
  });

  return (
    <div>
      <Navbar />
      <h1>{playlistName}</h1>
      {videos.length === 0 && <p>{`No videos in ${playlistName} playlist`}</p>}
      {videos.map((video) => (
        <VideoCard
          key={video._id}
          {...video}
          playlistName={playlistName}
          fromPlaylistPage
        />
      ))}
    </div>
  );
};

export default Playlist;
