import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeCards({props, index}) {
    const [currentPokemon, setCurrentPokemon] = useState(null)
    const [type , setType] = useState({theType : []})
    // console.log(props);

    async function pokemonData(){
        try {
            const response = await axios({
                method: "get",
                url: props.url
            })
            console.log(response.data);
            setCurrentPokemon(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        pokemonData()
    },[])
  return ( currentPokemon &&
    <div className="listWrapper">
      <h1>{props.name}</h1>
      <p>{currentPokemon.types.map(type => type.type.name).join(', ')}</p>
      <img src={currentPokemon.sprites.other['official-artwork'].front_default} alt="pokemon" />
      <span></span>
    </div>
  );
}
