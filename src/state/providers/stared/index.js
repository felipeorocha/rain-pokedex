import { createContext, useContext, useState } from "react";

const StaredContext = createContext({});

const localSaved = JSON.parse(localStorage.getItem('@stared-pokemons')) || '';

export default function StaredProvider({ children }) {
  const [stared, setStared] = useState([]);

  const addPoke = poke => {
    setStared(prev => [...prev, poke]);
    localStorage.setItem('@stared-pokemons', JSON.stringify(stared));
  }

  return (
    <StaredContext.Provider value={{
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
