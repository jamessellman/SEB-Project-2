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
      const resp = await fetch("https://api.disneyapi.dev/character");
      const characterData = await resp.json();
      setCharacters(characterData);
      console.log(characterData.data);
      console.log(characterData.data[0]);
      console.log(characterData.data[0].name);
      console.log(characterData.data[0].imageUrl);
      console.log(characterData.data[0].films);
    }
    fetchCharacters();
  }, []);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1">Characters</h1>
        <input
          className="input is-info mb-4"
          placeholder="Search characters.."
          onChange={handleChange}
        />

        <div className="columns is-multiline">
          {filterCharacters()?.map((character) => {
            return (
              <Character
                key={character._id}
                id={character._id}
                name={character.name}
                image={character.imageUrl}
                film={character.films}
                tv={character.tvShows}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CharacterList;
