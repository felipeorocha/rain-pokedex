import { useEffect, useState } from 'react';
import { fetchAllPokemons } from './services/api';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nextPokemonPage, setNextPokemonPage] = useState('');
  const [prevPokemonPage, setPrevPokemonPage] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'pokemon';

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetchAllPokemons(initialUrl);
      setNextPokemonPage(res.next);
      setPrevPokemonPage(res.previous);
      setLoading(false);
    }

    getPokemon();
  }, []);

  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : (
        <h1>Good to go!</h1>
      )}

    </div>
  );
}

export default App;
