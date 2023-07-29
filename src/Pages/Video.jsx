import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Video = () => {
  const {
    appState: { allVideos, allPlaylists },
    removeFromWatchLater,
    addToWatchLater,
    handleAddToPlaylist,
  } = useContext(AppContext);
  const { videoId } = useParams();
  console.log(videoId);
  const { title, src, isWatchLater, _id } = allVideos.find(
    (video) => video._id === Number(videoId)
  );
  const [showModal, setShowModal] = useState(false);

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
      <button onClick={() => setShowModal(true)}>Add to playlist</button>
      {showModal && (
        <div className="popup-box">
          <div className="box">
            {allPlaylists.map(({ id, name }) => (
              <p
                style={{ cursor: "pointer" }}
                key={id}
                onClick={() => {
                  handleAddToPlaylist(_id, name);
                  setShowModal(false);
                }}
              >
                {name}
              </p>
            ))}
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
