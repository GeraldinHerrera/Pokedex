
import React, { useContext } from 'react';
import PokemonCard from '../../components/PokemonCard/index.jsx';
import { PokemonContext } from '../../Context/index.jsx';
import './_home.scss';
import Banner from '../../components/Banner/index.jsx';
import Loader from '../../components/Loader/index.jsx'

const Home = () => {
  const { filteredPokemons, loading, error } = useContext(PokemonContext);
  
  if (loading) return <Loader />;
  if (error) return <p className="loading-text">Error al cargar Pokémon.</p>;

  return(
    <div className='container-home'>
      <div className='banner_container-home'>
        <Banner />
      </div>

      <div className="cards-grid_container-home">
        {filteredPokemons.map(pokemon => {
          const spriteData = pokemon.pokemon_v2_pokemonsprites?.[0]?.sprites;
          const sprite = spriteData?.front_default || '';
          return (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprite={sprite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
