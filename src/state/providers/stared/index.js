import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from '../useLocalStorage';

const StaredContext = createContext({});

export default function StaredProvider({ children }) {
  const [stared, setStared] = useState([]);
  const [, setState] = useLocalStorage('@stared-pokemons');

  useEffect(() => {
    console.log('Update state', stared);
    setState(stared, '@stared-pokemons')
  }, [setState, stared]);


  const addPoke = pokemon => {
    setStared([...stared, pokemon]);
  }

  return (
    <StaredContext.Provider
      value={{
        stared,
        addPoke,
      }}
    >
      {children}
    </StaredContext.Provider>
  )
}

export function useStared() {
  const context = useContext(StaredContext);
  const { stared, addPoke } = context;

  return { stared, addPoke };
}