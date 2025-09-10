import React, { useContext } from "react";
import { PokemonContext } from "../../Context";
import PokemonCard from "../../components/PokemonCard";
import { useNavigate } from "react-router-dom";
import "./_favorites.scss";

const Favorites = () => {
  const { favorites } = useContext(PokemonContext);
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <div className="loading-text">
        <span>No tienes pokémon favoritos todavía.</span>
        <button className="add-btn" onClick={() => navigate("/")}>
          Agregar
        </button>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <header className="favorites-header">
        <button className="back-button" onClick={() => navigate("/")}>
          ←
        </button>
        <h2>⭐ Tus Pokémon Favoritos</h2>
      </header>

      <div className="cards-grid_container-home">
        {favorites.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprite}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

