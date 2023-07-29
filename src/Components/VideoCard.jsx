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
}) => {
  return (
    <article>
      <Link to={src}>
        <img src={thumbnail} alt={thumbnail} />
      </Link>
      <p>{title}</p>
      <p>{creator}</p>
      <p>{category}</p>
      <p>{views}</p>
    </article>
  );
};

export default CategoryCard;
