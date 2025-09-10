import React from "react";
import { Weight, Ruler } from "lucide-react"; 
import './_pokemonInfo.scss'

const PokemonInfo = ({ description, types, themeColor, weight, height, abilities }) => {
  return (
    <div className="pokemon-info">
      <div className="pokemon-types">
        {types.map(({ pokemon_v2_type }) => (
          <span
            key={pokemon_v2_type.name}
            className={`type ${pokemon_v2_type.name}`}
          >
            {pokemon_v2_type.name}
          </span>
        ))}
      </div>

      <section className="about">
        <h2
           style={{
                  color: themeColor,
                }}
        >About</h2>
        
        {/* Info Grid */}
        <div className="info-grid">
          <div className="info-item">
            <Weight className="icon" />
            <p className="value">{(weight / 10).toFixed(1)} kg</p>
            <span className="label">Weight</span>
          </div>

          <div className="divider"></div>

          <div className="info-item">
            <Ruler className="icon" />
            <p className="value">{(height / 10).toFixed(1)} m</p>
            <span className="label">Height</span>
          </div>

          <div className="divider"></div>

          <div className="info-item">
            <p className="value">{abilities.join(", ")}</p>
            <span className="label">Moves</span>
          </div>
        </div>
      </section>
      {/* Description */}
      <section className="description">
        <p>{description}</p>
      </section>
    </div>
  );
};

export default PokemonInfo;
