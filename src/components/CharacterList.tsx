import React from "react";
import Character from "./Character";

function CharacterList() {
  //Settings states for character, search bar and drop down
  const [characters, setCharacters] = React.useState<any>([]);
  const [search, setSearch] = React.useState("");
  const [value, setValue] = React.useState("");

  //hardcoding film options for drop down
  const filmOptions = [
    { label: "Select Film", value: "" },
    { label: "Hercules", value: "Hercules" },
    { label: "The Lion King", value: "The Lion King" },
    { label: "The Jungle Book", value: "The Jungle Book" },
    { label: "The Fox and the Hound", value: "The Fox and the Hound" },
    { label: "Mulan", value: "Mulan" },
    { label: "Big Hero 6", value: "Big Hero 6" },
  ];

  //functions to handle change events for drop down and search bar
  function handleChange(e: any) {
    setSearch(e.currentTarget.value);
  }
  //handleChangefilm function sets value to the change event on the drop down
  function handleChangeFilm(e: any) {
    setValue(e.currentTarget.value);
  }

  // once the programme reaches line 89, whither the be with data from the onload api or dropdown amended api, this filter character function is called
  // which filters through data, and returns is search is empty string or search is included in data and return id value is equal to empty string or included in data
  function filterCharacters() {
    return characters.data?.filter((character: any) => {
      return (
        (search === "" ||
          character.name.toLowerCase().includes(search.toLowerCase())) &&
        (value === "" || character.films.includes(value))
      );
    });
  }
  // async funtion called on load, to pull through first 200 results of api, and is filtered through further down jsx.
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

  //now a value as been set by handleChange film this async function can now run, returning the api filtered with value set (which is in this case is movies)
  //this then sets characters to the new data from filtered api
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
        <div className="columns filtered is-multiline ml-6 ">
          <input
            className="column is-two-third input mb-4 "
            placeholder="Search characters.."
            onChange={handleChange}
          />
          {/* Drop down to take value from user choice which calls teh handlechangefilm function */}
          <label className="column drop select is-info mb-4 p-0 is-pulled-right">
            <select value={value} onChange={handleChangeFilm}>
              {filmOptions.map((option) => {
                return <option value={option.value}>{option.label}</option>;
              })}
            </select>
          </label>
        </div>

        <div className="columns characters is-centered is-multiline is-one-quarter-desktop is-one-third-tablet">
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
