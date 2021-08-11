import { useState } from 'react';
import { Filter } from './styles';
import { FaSearch, FaTimes } from "react-icons/fa";


const Search = ({ filteredPokemon }) => {
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e.target.value);
    filteredPokemon(filter);
  }

  const handleSearchClear = () => {
    filteredPokemon(filter);
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
