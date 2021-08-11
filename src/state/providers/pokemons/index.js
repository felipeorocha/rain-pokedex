import { createContext, useContext, useState } from "react";

const PokemonContext = createContext({});

export default function PokemonProvider({ children }) {
  const [filter, setFilter] = useState('');

  return (
    <PokemonContext.Provider value={{
      filter,
      setFilter
    }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export function usePokemonFilter() {
  const context = useContext(PokemonContext);
  const { filter, setFilter } = context;

  return { filter, setFilter };
}
