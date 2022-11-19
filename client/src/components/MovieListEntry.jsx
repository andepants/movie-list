import React from 'react';

const MovieListEntry = ({ movie, index, toggleMovieWatched}) => {
  return (
    <div>
      <div>{movie.title}</div>
        <button className='entryWatchButton' onClick={() => toggleMovieWatched(movie)}>{movie.watched === true ? 'Watched' : 'To Watch'}
      </button>
    </div>
  );
};

export default MovieListEntry;