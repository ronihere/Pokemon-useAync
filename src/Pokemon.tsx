import {  useState } from "react";
import PokemonInfo from "./PokemonInfo";
import { getPokemonData } from "./utils";
import useAsync from "./customhooks/useAsync";

const PokemonCard = () => {
  const [inputPokemon, setInputPokemon] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const { data, status, error } = useAsync(
    () => {
    if (!searchedPokemon.trim()) {
      return null;
    }
    return getPokemonData(searchedPokemon);
  }
    , [searchedPokemon]);
  console.log('status',status)
  return (
      <section className="poke_container">
      <p>Try searching <span onClick={()=>setSearchedPokemon('pikachu')} style={{color:'#242424',cursor:'pointer'}}>'pikachu'</span>, <span onClick={()=>setSearchedPokemon('bulbasaur')} style={{color:'#242424', cursor:'pointer'}}>'bulbasaur'
      </span> or <span onClick={()=>setSearchedPokemon('charizard')} style={{color:'#242424',cursor:'pointer'}}>'charizard'</span></p>
        <div className="row_flex">
          <input
            type="text"
            value={inputPokemon}
            onChange={(e) => setInputPokemon(e.target.value)}
          />
          <button onClick={() => setSearchedPokemon(inputPokemon)}>Search</button>
      </div>
         <PokemonInfo pokemonInfo={data?.data} loading={status !== 'resolved' && status !=='idle'} />
      </section>
    );
  
};
export default PokemonCard;
