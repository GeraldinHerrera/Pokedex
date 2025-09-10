
import React, { createContext, useState, useEffect, useMemo } from 'react';
import client from '../Apollo/apolloClient.js';
import { GET_POKEMONS } from '../graphConsults/queries.jsx';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
   // Tipos únicos de los Pokémon cargados
  const [types, setTypes] = useState([]);
     // Pokemones favoritos
  const [favorites, setFavorites] = useState([]);
       // Pokemones buscados
  const [searchTerm, setSearchTerm] = useState("");
      // Estado filtro por tipo
  const [filterType, setFilterType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client.query({ query: GET_POKEMONS })
      .then(res => {
        const loadedPokemons = res.data.pokemon_v2_pokemon;
        setPokemons(loadedPokemons);

        // Extraer solo los tipos que existen en los Pokémon cargados
        const typeSet = new Set();
        loadedPokemons.forEach(p =>
          p.pokemon_v2_pokemontypes?.forEach(t =>
            typeSet.add(t.pokemon_v2_type.name)
          )
        );

        setTypes([...typeSet]); 
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (pokemon) => {
    setFavorites((prev) => {
      const exists = prev.find(fav => fav.id === pokemon.id);
      return exists ? prev.filter(fav => fav.id !== pokemon.id) : [...prev, pokemon];
    });
  };

  const isFavorite = (id) => favorites.some(fav => fav.id === id);

  // Filtrado de pokemons según búsqueda y tipo 
  const filteredPokemons = useMemo(() => {
    let filtered = pokemons;

    if (searchTerm) {
      filtered = filtered.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType !== "all") {
      filtered = filtered.filter(pokemon =>
        pokemon.pokemon_v2_pokemontypes?.some(
          (t) => t.pokemon_v2_type.name === filterType
        )
      );
    }

    return filtered;
  }, [pokemons, searchTerm, filterType]);

  return (
    <PokemonContext.Provider value={{ 
      pokemons,
      filteredPokemons,
      favorites,
      types, 
      loading,
      error,
      toggleFavorite,
      isFavorite,
      searchTerm,
      setSearchTerm,
      filterType,
      setFilterType
    }}>
      {children}
    </PokemonContext.Provider>
  );
};
