import { Filter } from './styles';
import { FaSearch, FaTimes } from "react-icons/fa";

import { usePokemonFilter } from '../../state/providers/pokemons';

const Search = () => {
  const { filter, setFilter } = usePokemonFilter();

  const handleChange = e => {
    setFilter(e.target.value);
  }

  const handleSearchClear = () => {
    setFilter('');
  }

  return (
    <Filter>
      <div className="icon-container">
        <FaSearch />
      { filter && <FaTimes onClick={() => handleSearchClear()} /> }
      </div>
      <input type="text" placeholder="Search Pokemon..." value={filter} onChange={e => handleChange(e)} />
    </Filter>
  );
}

export default Search;
