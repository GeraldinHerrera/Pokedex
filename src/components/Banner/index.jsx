
import './_banner.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from '../../Context';

const Banner = () => {
  const { searchTerm, setSearchTerm, filterType, setFilterType, types } = useContext(PokemonContext);

  const PokeballIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
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
    <div className="banner">
      <div className="banner-title">
        <PokeballIcon />
        Pokédex
      </div>

      <div className="search-container">
        {/* Buscador */}
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filtro*/}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="type-filter"
        >
          <option value="all">Todos</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>



        <Link to="/favorites" className="favorites-link">
        <label>
                      ⭐ Favoritos
        </label>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
