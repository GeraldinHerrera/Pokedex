import React from "react";
import './_pokemonStats.scss'

const PokemonStats = ({ stats, themeColor }) => {
  return (
    <section className="pokemon-stats">
      <h2 style={{ color: themeColor }}>Base Stats</h2>
      <ul>
        {stats.map((stat) => (
          <li key={stat.pokemon_v2_stat.name} className="stat-row">
            <span className="stat-name" style={{ color: themeColor }}>
              {stat.pokemon_v2_stat.name.toUpperCase()}
            </span>

            <span className="stat-value">
              {stat.base_stat.toString().padStart(3, "0")}
            </span>

            <div className="progress">
              <div
                className="progress-bar"
                style={{
                  width: `${stat.base_stat / 2}%`,
                  background: themeColor,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PokemonStats;
