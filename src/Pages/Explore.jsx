import React, { useContext } from "react";
import Navbar from "./Navbar";
import { AppContext } from "../Context/AppContext";
import VideoCard from "../Components/VideoCard";

const Explore = () => {
  const {
    appState: { filteredVideos },
    dispatch,
  } = useContext(AppContext);

  const handleChange = (e) => {
    dispatch({ type: "SEARCH", payload: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <h1>Explore</h1>
      <div>
        <input
          type="text"
          placeholder="search for videos"
          onChange={handleChange}
        />
      </div>

      <section>
        {filteredVideos.map((video) => (
          <VideoCard key={video._id} {...video} />
        ))}
      </section>
    </div>
  );
};

export default Explore;
