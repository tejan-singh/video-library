import React, { useContext } from "react";
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
}) => {
  const { dispatch, removeFromWatchLater, addToWatchLater } = useContext(AppContext);


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
    </article>
  );
};

export default CategoryCard;
