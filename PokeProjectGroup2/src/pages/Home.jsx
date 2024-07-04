import React from 'react';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
  const pokemonList = [
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Ivysaur' },
    { id: 3, name: 'Venusaur' },
    { id: 4, name: 'Charmander' },
    { id: 5, name: 'Charmeleon' },
    { id: 6, name: 'Charizard' },
  ];

  return (
    <div>
      <h1>Home</h1>
      <div className="pokemon-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemonList.map(pokemon => (
          <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
