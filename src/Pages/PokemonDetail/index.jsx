import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../Apollo/apolloClient";
import { GET_POKEMON_DETAIL } from "../../graphConsults/queries";
import "./_pokemonDetail.scss";
import PokemonHeaderImage from "../../components/PokemonDetailsComponents/PokemonHeaderIamage";
import PokemonInfo from "../../components/PokemonDetailsComponents/PokemonInfo";
import PokemonStats from "../../components/PokemonDetailsComponents/PokemonStats";
import Loader from "../../components/Loader";

const colorMap = {
  red: "#F08030",
  blue: "#6890F0",
  green: "#78C850",
  yellow: "#F8D030",
  black: "#303943",
  brown: "#A0522D",
  purple: "#A040A0",
  pink: "#EE99AC",
  gray: "#A8A8A8",
  white: "#A8A8A8"
};

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .query({
        query: GET_POKEMON_DETAIL,
        variables: { id: parseInt(id, 10) }
      })
      .then((res) => {
        setPokemon(res.data.pokemon_v2_pokemon_by_pk);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (!pokemon) return <p>No se encontró el Pokémon.</p>;

  const sprite =
    pokemon.pokemon_v2_pokemonsprites?.[0]?.sprites?.front_default || "";

  const colorName =
    pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemoncolor?.name || "gray";
  const themeColor = colorMap[colorName] || "#78C850";
  const description =
    pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesflavortexts?.[0]
      ?.flavor_text.replace(/\f/g, " ") || "No description available.";

  return (
    <div className="pokemon-detail" style={{ borderColor: themeColor }}>
      <PokemonHeaderImage
        name={pokemon.name}
        id={pokemon.id}
        sprite={sprite}
        themeColor={themeColor}
      />
      <PokemonInfo
        description={description}
        types={pokemon.pokemon_v2_pokemontypes}
        themeColor={themeColor}
        weight={pokemon.weight}
        height={pokemon.height}
        abilities={pokemon.pokemon_v2_pokemonabilities.map(a => a.pokemon_v2_ability.name)}
      />
      <PokemonStats stats={pokemon.pokemon_v2_pokemonstats} themeColor={themeColor} />
    </div>
  );
};

export default PokemonDetail;
