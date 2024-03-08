import React from "react";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacters] = React.useState([]);
  const [search, setSearch] = React.useState("");
  console.log(search);

  React.useEffect(() => {
    console.log("The character list Page has mounted");
  }, []);

  function handleChange(e) {
    setSearch(e.currentTarget.value);
  }

  function filterCharacters() {
    return characters.data?.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  React.useEffect(() => {
    async function fetchCharacters() {
      const resp = await fetch(
        "https://api.disneyapi.dev/character?pageSize=200"
      );
      const characterData = await resp.json();
      setCharacters(characterData);
      console.log(characterData.data.sourceUrl);
    }
    fetchCharacters();
  }, []);
  return (
    <section className="hero is-fullheight">
      <div className="container">
        <h1 className="title is-1 has-text-white ml-6">Characters</h1>
        <div className="columns is-multiline ">
          <div className="column is-two-thirds ml-6 ">
            <input
              className="input is-centered mb-5"
              placeholder="Search characters.."
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="columns is-centered is-multiline is-one-quarter-desktop is-one-third-tablet">
          {filterCharacters()?.map((character) => {
            return (
              <Character
                key={character._id}
                id={character._id}
                name={character.name}
                image={character.imageUrl}
                films={character.films}
                tvShows={character.tvShows}
                linkSource={character.sourceUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CharacterList;
