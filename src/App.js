import "./styles.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Explore from "./Pages/Explore";
import AllPlaylist from "./Pages/AllPlaylist";
import WatchLater from "./Pages/WatchLater";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlists" element={<AllPlaylist />} />
        <Route path="/watchlater" element={<WatchLater />} />
      </Routes>
    </div>
  );
}
