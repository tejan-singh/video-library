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
      <div className="home">
        {categories.map((eachCategory) => (
          <CategoryCard key={eachCategory._id} {...eachCategory} />
        ))}
      </div>
    </>
  );
};

export default Home;
