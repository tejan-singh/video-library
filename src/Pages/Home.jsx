import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Home = () => {
  const { appState } = useContext(AppContext);

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
