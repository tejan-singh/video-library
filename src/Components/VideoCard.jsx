import React from "react";
import { Link } from "react-router-dom";

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
}) => {
  const removeFromWatchLater = () => {
    console.log("removed");
  };

  const addToWatchLater = () => {
    console.log("added");
  };

  return (
    <article>
      <Link to={`/videos/${_id}`}>
        <img src={thumbnail} alt={thumbnail} />
      </Link>
      <p>{title}</p>
      <p>{creator}</p>
      <p>{category}</p>
      <p>{views} views</p>
      <button onClick={isWatchLater ? removeFromWatchLater : addToWatchLater}>
        {isWatchLater ? "remove from watch later" : "watch later"}
      </button>
    </article>
  );
};

export default CategoryCard;
