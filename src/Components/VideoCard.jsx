import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const CategoryCard = ({
  _id,
  thumbnail,
  src,
  category,
  chips,
  creator,
  title,
  views,
  isWatchLater,
  fromPlaylistPage,
  fromVideoListing,
  playlistName,
}) => {
  const {
    appState: { allPlaylists },
    dispatch,
    removeFromWatchLater,
    addToWatchLater,
    removeFromPlaylist,
    handleAddToPlaylist,
  } = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);

  return (
    <article>
      <Link to={`/videos/${_id}`}>
        <img src={thumbnail} alt={thumbnail} />
      </Link>
      <p>{title}</p>
      <p>{creator}</p>
      <p>{category}</p>
      <p>{views} views</p>
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
      {!fromPlaylistPage && (
        <button onClick={() => setShowModal(true)}>Add to playlist</button>
      )}
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
      {fromPlaylistPage && (
        <button onClick={() => removeFromPlaylist(_id, playlistName)}>
          Remove from playlist
        </button>
      )}
    </article>
  );
};

export default CategoryCard;
