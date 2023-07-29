import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ _id, thumbnail, src, category }) => {
  return (
    <article className="categories">
      <Link to={`/categories/${category}`}>
        <img src={thumbnail} alt={thumbnail} />
      </Link>
      <p>{category}</p>
    </article>
  );
};

export default CategoryCard;
