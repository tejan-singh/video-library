import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Navbar from "./Navbar";

const Home = () => {
  const { appState } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <h1>Home</h1>
    </>
  );
};

export default Home;
