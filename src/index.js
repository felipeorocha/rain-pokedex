import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PokemonProvider from './state/providers/pokemons';

ReactDOM.render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
