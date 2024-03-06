import React from "react";

function Character({ name, image }) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{name}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={image} alt={name} />
            </figure>
          </div>
          {/* <div className="card-content">
            <h5>{film}</h5>
          </div> */}
        </div>
    </div>
  );
}

export default Character;
