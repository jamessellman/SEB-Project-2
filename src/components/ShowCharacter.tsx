import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Character from "./Character";

function ShowCharacter() {
  const { id } = useParams();

  const [character, setCharacter] = React.useState(null);

  React.useEffect(() => {
    async function fetchCharacter() {
      const resp = await fetch(`https://api.disneyapi.dev/character/${id}`);
      const characterData = await resp.json();
      console.log(characterData);
      setCharacter(characterData.data);
    }
    fetchCharacter();
  }, [id]);

  console.log(id);

  if (!character) {
    return <p>Character Loading...</p>;
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={character.imageUrl} alt={character.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              {character.name}
              {character.data.film}
              {character.data.tv}
              <small>31m</small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              efficitur sit amet massa fringilla egestas. Nullam condimentum
              luctus turpis.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ShowCharacter;
