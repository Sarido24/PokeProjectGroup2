import { useState, React, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import './index.css';
import './App.css'
import { MyContext } from "./context";
import router from "./router/index";
import axios from 'axios';

function App() {

  // INISIALISASI GLOBAL STATE
  const [data, setData] = useState(null);
  const [allPokemons, setAllPokemons] = useState(null);
  const [speciesData, setSpeciesData] = useState(null);
  const [evolutionData, setEvolutionData] = useState(null);
  const [evolutionSprites, setEvolutionSprites] = useState({});
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")

  // FUNGSI UNTUK MENGAMBIL DATA POKEMON DARI API
  const fetchPokemonData = async (idOrName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
      const speciesResponse = await axios.get(response.data.species.url);
      setData(response.data);
      setSpeciesData(speciesResponse.data);

      if (speciesResponse.data.evolution_chain.url) {
        const evolutionResponse = await axios.get(speciesResponse.data.evolution_chain.url);
        setEvolutionData(evolutionResponse.data);

        // Mengambil sprite untuk setiap Pokémon di proses evolusi
        let evoData = evolutionResponse.data.chain;
        const sprites = {};
        
        while (evoData) {
          const evoPokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evoData.species.name}`);
          sprites[evoData.species.name] = evoPokemonResponse.data.sprites.other['official-artwork'].front_default;
          evoData = evoData.evolves_to[0];
        }

        setEvolutionSprites(sprites);
      }
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  const getAllPokemon = async ()=>{
    try {
      const response = await axios ({
        method: 'get',
        url: URL
      })
      if(response.data){
        setAllPokemons(response.data)
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getAllPokemon()
  },[URL])

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        speciesData,
        fetchPokemonData,
        evolutionData,
        evolutionSprites,
        allPokemons,
        getAllPokemon,
        setURL,
        URL
      }}
    >
      <RouterProvider router={router} />
    </MyContext.Provider>
  )
}

export default App;
