import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from '../useLocalStorage';

const StaredContext = createContext({});

export default function StaredProvider({ children }) {
  const [state, setState] = useLocalStorage('@stared-pokemons');
  const [stared, setStared] = useState(state || []);

  useEffect(() => {
    setState(stared, '@stared-pokemons')
  }, [setState, stared]);


  const addPoke = pokemon => {
    console.log('POKEMON:::: ', pokemon)
    if (stared.length !== 0) {      
      setStared([...stared, pokemon])
      console.log(state)
    } else {
      setStared([pokemon])
    }
  }

  const removePoke = pokemon => {
    const filterPokemons = stared.filter(staredPokemon => staredPokemon.name !== pokemon.name)
    setStared(filterPokemons)
  }

  return (
    <StaredContext.Provider
      value={{
        stared,
        addPoke,
        removePoke,
      }}
    >
      {children}
    </StaredContext.Provider>
  )
}

export function useStared() {
  const context = useContext(StaredContext);
  const { stared, addPoke, removePoke } = context;

  return { stared, addPoke, removePoke };
}