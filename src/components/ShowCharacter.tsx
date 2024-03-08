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
      setCharacter(characterData.data);
      console.log(characterData.data)
    }
    fetchCharacter();
  }, [id]);

  if (!character) {
    return <p>Character Loading...</p>;
  }
  console.log(character.sourceUrl);
  return (
    <section className="hero is-fullheight">
      <div className="box is-centered has-background-success-light">
        <div className="columns is-multiline">
          <div className="column is-two-fifths">
            <figure className="image is-full-width">
              <img src={character.imageUrl} alt={character.name} />
            </figure>
          </div>
          <div className="column is-one-third">
            <div className="content">
              <h2 className="is-size-2">{character.name}</h2>
              <h5 className="mt-2 mb-1">Films:</h5>
              <div>
                {character.films.map((film) => {
                  return <p className="my-2">{film}</p>;
                })}
              </div>
              <h5 className="mt-4 mb-1">TV Shows:</h5>
              <div>
                {character.tvShows.map((tv) => {
                  if (!character.tvShows) {
                    return <p>No Shows</p>;
                  } else {
                    return <p className="my-2">{tv}</p>;
                  }
                })}
              </div>
            </div>
          </div>
          <div className="column ">
            <p className="is-pulled-right">Disney ID: {character._id}</p>
          </div>
        </div>
        <div className="is-flex">
          <a className="learn-more " href={character.sourceUrl} target="_blank">
            Click here to find out more about this Disney character
          </a>
        </div>
      </div>
    </section>
  );
}

export default ShowCharacter;
