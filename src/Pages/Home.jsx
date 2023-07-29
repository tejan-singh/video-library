import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Navbar from "./Navbar";
import CategoryCard from "../Components/CategoryCard";

const Home = () => {
  const {
    appState: { categories },
  } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <h1>Categories</h1>
      {categories.map((eachCategory) => (
        <CategoryCard key={eachCategory._id} {...eachCategory} />
      ))}
    </>
  );
};

export default Home;
