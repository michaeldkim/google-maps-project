import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSearch(inputValue);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Where are you going?"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;