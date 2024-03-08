import React from "react";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacters] = React.useState<any>([]);
  const [search, setSearch] = React.useState("");
  const [value, setValue] = React.useState("");

  const filmOptions = [
    { label: "Select Film", value: "" },
    { label: "Hercules", value: "Hercules" },
    { label: "The Lion King", value: "The Lion King" },
    { label: "The Jungle Book", value: "The Jungle Book" },
    { label: "The Fox and the Hound", value: "The Fox and the Hound" },
    { label: "Mulan", value: "Mulan" },
    { label: "Big Hero 6", value: "Big Hero 6" },
  ];

  React.useEffect(() => {
    console.log("The character list Page has mounted");
  }, []);

  function handleChange(e: any) {
    setSearch(e.currentTarget.value);
  }
  function handleChangeFilm(e: any) {
    setValue(e.currentTarget.value);
  }

  function filterCharacters() {
    return characters.data?.filter((character: any) => {
      return (search === "" ||character.name.toLowerCase().includes(search.toLowerCase()) )
      && (value === "" || character.films.includes(value)) ;
    });
  }

  React.useEffect(() => {
    async function fetchCharacters() {
      const resp = await fetch(
        "https://api.disneyapi.dev/character?pageSize=200"
      );
      const characterData = await resp.json();
      setCharacters(characterData);
    }
    fetchCharacters();
  }, []);

  React.useEffect(() => {
    async function fetchCharacter() {
      const resp = await fetch(
        `https://api.disneyapi.dev/character?films=${value}`
      );
      const filmData = await resp.json();
      setCharacters(filmData);
    }
    fetchCharacter();
  }, [value]);

  return (
    <section className="hero is-fullheight main-characters">
      <div className="container">
        <h1 className="title is-1 has-text-white ml-6">Characters</h1>
        <div className="columns is-multiline ">
          <div className="column is-two-thirds ml-6 ">
            <input
              className="input is-centered mb-5"
              placeholder="Search characters.."
              onChange={handleChange}
            />
            <label>
              Choose film
              <select value={value} onChange={handleChangeFilm}>
              {filmOptions.map((option) => {
                  return <option value={option.value}>{option.label}</option>;
                })}
              </select>
            </label>
          </div>
        </div>

        <div className="columns is-centered is-multiline is-one-quarter-desktop is-one-third-tablet">
          {filterCharacters()?.map((character: any) => {
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
