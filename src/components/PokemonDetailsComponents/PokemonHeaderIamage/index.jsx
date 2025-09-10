import React from "react";
import { useNavigate } from "react-router-dom";
import './_pokemonHeaderIamage.scss';

const PokemonHeaderImage = ({ name, id, sprite, themeColor }) => {
  const navigate = useNavigate();
  const PokeballIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="banner-icon"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

  return (
    <header className="pokemon-header" style={{ background: themeColor }}>
        <div className="pokeball-bg">
          <PokeballIcon />
        </div>
      <div className="header-content">
        
        <div className="left-section">
          <button className="back-button" onClick={() => navigate("/")}>
            ←
          </button>
          <h1 className="pokemon-name">{name}</h1>
        </div>

        <span className="pokemon-id">#{id.toString().padStart(3, "0")}</span>
      </div>

      <div className="pokemon-image">
        <img src={sprite} alt={name} />
      </div>
    </header>
  );
};

export default PokemonHeaderImage;

