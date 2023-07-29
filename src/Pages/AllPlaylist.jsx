import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

const AllPlaylist = () => {
  const {
    appState: { allPlaylists },
    dispatch,
  } = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [playlistName, setPlaylistName] = useState("");

  const handleAddPlaylist = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_PLAYLIST", payload: userInput });
    setUserInput("");
    setShowModal((prev) => !prev);
  };

  const handlePlaylistChange = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_PLAYLIST",
      payload: { name: playlistName, id: editId },
    });
    setPlaylistName("");
    setEditId(() => null);
  };

  const handleDeletePlaylist = (id) => {
    dispatch({
      type: "DELETE_PLAYLIST",
      payload: id,
    });
  };

  return (
    <>
      <Navbar />
      <h1>AllPlaylist</h1>
      {allPlaylists.length === 0 && <p>No playlist created</p>}
      {allPlaylists.map(({ id, name }) => (
        <>
          {editId === id ? (
            <div className="popup-box">
              <div className="box">
                <form onSubmit={handlePlaylistChange}>
                  <p>Edit</p>
                  <input
                    required
                    type="text"
                    onChange={(e) => setPlaylistName(e.target.value)}
                    value={playlistName}
                  />
                  <button type="submit">Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </form>
              </div>
            </div>
          ) : (
            <article key={id}>
              <Link to={`/playlists/${name}`}>{name}</Link>
              <button onClick={() => handleDeletePlaylist(id)}>
                Delete playlist
              </button>
              <button
                onClick={() => {
                  setEditId(() => id);
                  setPlaylistName(() => name);
                }}
              >
                Edit playlist
              </button>
            </article>
          )}
        </>
      ))}
      {showModal && (
        <div className="popup-box">
          <div className="box">
            <p>Add new playlist</p>
            <form onSubmit={handleAddPlaylist}>
              <input
                required
                type="text"
                onChange={(e) => setUserInput(e.target.value)}
                value={userInput}
              />
              <button type="submit">Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
      {!showModal && (
        <button onClick={() => setShowModal(true)}>Add playlist</button>
      )}
    </>
  );
};

export default AllPlaylist;
