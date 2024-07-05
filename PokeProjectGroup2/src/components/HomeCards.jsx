import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomeCards({ props, index }) {
  const [currentPokemon, setCurrentPokemon] = useState(null);

  async function pokemonData() {
    try {
      const response = await axios.get(props.url);
      setCurrentPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pokemonData();
  }, []);

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
