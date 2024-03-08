import React from "react";
import { Link } from "react-router-dom";

function Character({ name, image, id, films, tvShows, linkSource }: any) {
  return (
    <Link to={`/character/${id}`}>
      <div className="column card has-background-success-light">
        <div className="card-header">
          <div className="card-header-title">{name}</div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1 is-square">
            <img src={image} alt={name} />
          </figure>
        </div>
      </div>
    </Link>
  );
}

export default Character;
