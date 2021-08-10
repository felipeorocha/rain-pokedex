import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

const fetchApi = axios.create({
  baseURL: BASE_URL
});

export const fetchPokemons = url => {
  return fetchApi.get(url);
}

export default fetchApi;
