import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context";

export default function HomeCards({ props, index }) {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const {allPokemons} = useContext(MyContext)

  async function pokemonData() {
    try {
      const response = await axios.get(props.url);
      setCurrentPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(URL);
  useEffect(() => {
    pokemonData();
  }, [allPokemons]);

  return (
    currentPokemon && (
      <Link to={`/detail/${currentPokemon.id}`}>
      <div className="listWrapper">
        
          <h1>{props.name}</h1>
          <p>{currentPokemon.types.map(type => type.type.name).join(', ')}</p>
          <img src={currentPokemon.sprites.other['official-artwork'].front_default} alt="pokemon" />
          <span></span>
      </div>
      </Link>
    )
  );
}
