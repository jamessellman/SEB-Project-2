import React from "react";
import Character from "./Character";


function CharacterList() {
    const [characters, setCharacters] = React.useState ([])

  React.useEffect(() => {
    console.log("The character list Page has mounted");
  }, []);

 React.useEffect(
    () => {
      async function fetchCharacters() {
        const resp = await fetch("https://api.disneyapi.dev/character");
        const characterData = await resp.json();
        setCharacters(characterData);
        console.log(characterData.data)
        console.log(characterData.data[0])
        console.log(characterData.data[0].name)
        console.log(characterData.data[0].imageUrl)
      }
      fetchCharacters() 
    }, [])
  return (

    <section className="section">
    <div className="container">
      <div className="columns is-multiline">
        {characters.data?.map((character) => {
          return <Character 
            name={character.name}
            image={character.imageUrl}
            // film={character.data.films}
            // tv={character.data.tvShows}
          />
        })}
      </div>
    </div>
  </section>
  )
}



export default CharacterList;
