import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context';
import Button from 'react-bootstrap/Button';

const PokemonCard = ({ id, name }) => {
  const { fetchPokemonData } = useContext(MyContext);
  const navigate = useNavigate();

  const handleClick = () => {
    fetchPokemonData(id);
    navigate(`/detail/${id}`);
  };

  return (
    <div className="pokemon-card" onClick={handleClick} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px', textAlign: 'center', cursor: 'pointer' }}>
      <h2>{name}</h2>
      <Button variant="primary">View Details</Button>
    </div>
  );
};

export default PokemonCard;
