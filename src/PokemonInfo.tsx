import InitialPokeCard from "./components/InitialPokeCard";
import LoadingPokemon from "./components/LoadingPokemon";
import NameCard from "./components/NameCard";
import PokemonStats from "./PokemonStats";
const PokemonInfo = ({ loading, pokemonInfo }: any) => {
  console.log('pokemonInfo:::', (pokemonInfo))
  console.log('Loading', loading);
  if (loading) {
    return <LoadingPokemon />
  }
  else if (!pokemonInfo) {
    return <InitialPokeCard/>
  }
  const { id, stats, name, abilities, types } = pokemonInfo;
  return (
    !loading 
    ?
    <div className="pokemon_info">
      {name ? <NameCard name={name} /> : 'Search for a Pokemon'}
      <img
        src={id ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg` : "https://cdn.dribbble.com/users/924424/screenshots/2829093/pokeball.gif"}
        alt="pokemon image"
      />
      <PokemonStats stats={stats} />
      </div>
      : 
      <>
      Searching...
      </>
    
  );
};
export default PokemonInfo;
