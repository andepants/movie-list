import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = ({ filterList, toggleMovieWatched }) => {
return (
    <div>
      {filterList.map((movie, index) =>
        <MovieListEntry movie={movie} key={index} toggleMovieWatched={toggleMovieWatched}/>
      )}
    </div>
  );
};

export default MovieList;