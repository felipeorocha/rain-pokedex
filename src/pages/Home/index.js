import { useEffect, useState } from 'react';
import {
  fetchPokemons as fetchAllPokemons,
  fetchPokemons as fetchPokemon,
} from '../../services/api';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Search from '../../components/Search';

import { GridContainer, ButtonsContainer } from './styles';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import { usePokemonFilter } from '../../state/providers/pokemons';
import { useStared } from '../../state/providers/stared';
import StaredProvider from '../../state/providers/stared';

const Home = ({ history }) => {
  const [pokemon, setPokemon] = useState([]);
  const [nextPokemonPage, setNextPokemonPage] = useState('');
  const [prevPokemonPage, setPrevPokemonPage] = useState('');
  const [loading, setLoading] = useState(true);
  const { filter } = usePokemonFilter();
  const { stared } = useStared();
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
      
      console.log('stareddd', stared);
      setNextPokemonPage(next);
      setPrevPokemonPage(previous);
      await loadingPokemon(results);
      setLoading(false);
    }

    getPokemon();
  }, [stared]);

  const nextPage = async () => {
    if (!nextPokemonPage) return;
    
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
          <Search />
          <GridContainer>
            <StaredProvider>
            { pokemon && pokemon.map((poke, index) => {
                return poke.name.includes(filter) &&
                  <Card key={index} pokemon={poke} />
                }) }
            </StaredProvider>
          </GridContainer>
          <ButtonsContainer>
            <Button id="prev" onClick={prevPage} primary={prevPokemonPage}>
              <FaAngleLeft />
            </Button>
            <Button id="next" onClick={nextPage} primary={nextPokemonPage}>
              <FaAngleRight />
            </Button>
          </ButtonsContainer>
        </>
      )}
    </div>
  );
}

export default Home;
