

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../../Context';
import './_pokemonCard.scss';

const PokemonCard = ({ id, name, sprite }) => {
  const { toggleFavorite, isFavorite } = useContext(PokemonContext);
  const favorite = isFavorite(id);

  const handleFavoriteClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    toggleFavorite({ id, name, sprite });
  };

  return (
    <div className="pokemon-card">
      <button
        className={`favorite-btn ${favorite ? "active" : ""}`}
        onClick={handleFavoriteClick}
      >
        {favorite ? "⭐" : "☆"}
      </button>

      <Link to={`/pokemon/${id}`} className="pokemon-link">
        <div className="pokemon-id">#{id}</div>
        <img src={sprite} alt={name} className="pokemon-sprite" />
        <div className="pokemon-name">{name}</div>
      </Link>
    </div>
  );
};

export default PokemonCard;

