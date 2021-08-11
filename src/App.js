import { useEffect, useState } from 'react';
import {
  fetchPokemons as fetchAllPokemons,
  fetchPokemons as fetchPokemon,
  fetchPokemons as searchPokemon
} from './services/api';
import Button from './components/Button';
import Card from './components/Card';
import Header from './components/Header';
import Loader from './components/Loader';
import Search from './components/Search';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nextPokemonPage, setNextPokemonPage] = useState('');
  const [prevPokemonPage, setPrevPokemonPage] = useState('');
  const [loading, setLoading] = useState(true);
  const [pokemonFilter, setPokemonFilter] = useState('');
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

  const nextPage = async () => {
    setLoading(true);

    const {
      data: {
        next,
        previous,
        results
      }
    } = await fetchAllPokemons(nextPokemonPage);

    await loadingPokemon(results);
    setNextPokemonPage(next);
    setPrevPokemonPage(previous);
    setLoading(false);
  }

  const prevPage = async () => {
    if (!prevPokemonPage) return;

    setLoading(true);
    const {
      data: {
        next,
        previous,
        results
      }
    } = await fetchAllPokemons(prevPokemonPage);

    await loadingPokemon(results);
    setNextPokemonPage(next);
    setPrevPokemonPage(previous);
    setLoading(false);
  }

  const loadingPokemon = async pokemonList => {
    const pokemons = await Promise.all(
      pokemonList.map(async pokemonItem => {
        const pokemonsListData = await fetchPokemon(pokemonItem.url);
        return pokemonsListData.data;
    }));

    setPokemon(pokemons);
  }

  return (
    <div>
      { loading ? <Loader /> : (
        <>
          <Header />
          <Search filteredPokemon={(query) => setPokemonFilter(query)} />
          <div className="grid-container">
            { pokemon && pokemon.map((poke, index) => {
                return poke.name.includes(pokemonFilter) &&
                <Card key={index} pokemon={poke} />        
            }) }
          </div>
          <div className="buttons-container">
            <Button onClick={prevPage}>
              <FaAngleLeft />
            </Button>
            <Button onClick={nextPage}>
              <FaAngleRight />
            </Button>
          </div>
        </>
      )}

    </div>
  );
}

export default App;
