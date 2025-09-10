
import React from "react";
import "./_loader.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="pokeball"></div>
      <p>Cargando Pokémon...</p>
    </div>
  );
};

export default Loader;
