import React, { useState, useEffect} from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

const axios = require('axios').default;
//const { useState } = React;

const movies = [
  {title: 'Mean Girls', watched: false},
  {title: 'Hackers', watched: false},
  {title: 'The Grey', watched: true},
  {title: 'Sunshine', watched: true},
  {title: 'Ex Machina', watched: false}
];

const App = (props) => {

  useEffect(() => {
    getDatabaseMovies();
  }, [movieList]);

  const getDatabaseMovies = () => {
    axios
      .get('/api/movies')
      .then(function (response) {
        console.log('hello, inside app.jsx')
        console.log('this is the response', response);
        setMovieList(response.data);
      })
      .catch(function (error) {
        console.log('this is an error: ', error);
      })
  }

  const [movieList, setMovieList] = useState(movies);
  const [filterList, setFilterList] = useState(movies);
  const filters = {watched: false, search: ''};

  const searchMovies = () => {
    event.preventDefault();
    let input = document.getElementById('searchField').value.toLowerCase();
    filters.search = input;
    var temp = generateFilteredData(movieList, input);

    if (temp.length === 0) {
      console.log('no movies found');
      setFilterList(movieList);
    }
    setFilterList(temp);
  }

  const generateFilteredData = () => {
    let filteredArray = [];
    movieList.forEach((movie) => {
      if (filters.watched == movie.watched) {
        if (movie.title.toLowerCase().includes(filters.search)) {
          filteredArray.push(movie);
        }
      }
    })
    return filteredArray;
  }

  const addMovie = () => {
    event.preventDefault();
    let input = document.getElementById('movieField').value;
    let newMovie = {title: input, watched: false};
    // let tempArray = movieList;
    // tempArray.push(newMovie);
    console.log('movieList inside addMOvie before add', movieList);
    console.log('filterList inside addMOvie before add', filterList);
    setMovieList(movieList => [...movieList, newMovie]);
    setFilterList(generateFilteredData(movieList));
  }

  const watchList = (status) => {
    let watched = document.getElementById('watched');
    let toWatch = document.getElementById('to-watch');
    filters.watched = status;
    setFilterList(generateFilteredData(movieList)); // #2 clicking button -> rerenders movieList
  }

  const toggleMovieWatched = (movie) => {
    console.log(`TITLE = ${movie.title} WATCHED? ${movie.status}`);
    let tempArray = movieList;
    for (let i = 0; i < movieList.length; i++) {
      if (tempArray[i].title === movie.title) {
        tempArray[i].watched = !tempArray[i].watched;
      }
    }

    setMovieList(tempArray);
    tempArray = generateFilteredData(tempArray);
    setFilterList(tempArray);
  };

  return (
    <div>
      <h1>MovieList</h1>
      <div>Add Movie</div>
        <div><AddMovie addMovie={addMovie}/></div>
      <div>Search Bar</div>
        <div><SearchBar searchMovies={searchMovies}/></div>
      <div>
        <button id='watched' onClick={() => watchList(true)}>Watched</button>
        {/* #1 setting the filter to true */}
        <button id='to-watch' onClick={() => watchList(false)}>To Watch</button>
      </div>
        <div><MovieList filterList={filterList} toggleMovieWatched={toggleMovieWatched}/></div>
    </div>
  );
};

export default App;