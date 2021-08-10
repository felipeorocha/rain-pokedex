import { useEffect, useState } from 'react';
import {
  fetchPokemons as fetchAllPokemons,
  fetchPokemons as fetchPokemon
} from './services/api';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nextPokemonPage, setNextPokemonPage] = useState('');
  const [prevPokemonPage, setPrevPokemonPage] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'pokemon';

  useEffect(() => {
    const getPokemon = async () => {
      const {
        data: {
          next,
          previous,
          results
        }
      } = await fetchAllPokemons(initialUrl);

      setNextPokemonPage(next);
      setPrevPokemonPage(previous);
      await loadingPokemon(results);
      setLoading(false);
    }

    getPokemon();
  }, []);

  const loadingPokemon = async pokemonList => {
    const pokemons = await Promise.all(
      pokemonList.map(async pokemonItem => {
        const pokemonsListData = await fetchPokemon(pokemonItem.url);
        return pokemonsListData;
    }));

    setPokemon(pokemons);
  }

  console.log('poke', pokemon);
  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : (
        <h1>Good to go!</h1>
      )}

    </div>
  );
}

export default App;
