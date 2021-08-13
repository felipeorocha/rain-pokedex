import { createContext, useContext, useState } from "react";

const StaredContext = createContext({});

export default function StaredProvider({ children }) {
  const [stared, setStared] = useState([]);

  const staredItems = JSON.parse(localStorage.getItem('@stared-items'));

  const addPoke = poke => {
    setStared(prev => {

      if (!staredItems) {
        localStorage.setItem('@stared-items', JSON.stringify(prev.includes(poke) ? stared.filter(item => item !== poke) : [...prev, poke]));
      } else {
        staredItems && localStorage.setItem('@stared-items', JSON.stringify(staredItems.includes(poke) ? staredItems.filter(item => item !== poke) : [...staredItems, poke]));
      }
    });
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
