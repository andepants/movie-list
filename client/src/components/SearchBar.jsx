import React from 'react';

const SearchBar = ({ searchMovies }) => {
  return (
    <div>
      <input id='searchField' placeholder='Search...' type='text'></input>
      <button id='searchButton' onClick={searchMovies}>Search!</button>
    </div>
  );
}

export default SearchBar;