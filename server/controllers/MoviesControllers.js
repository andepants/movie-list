const MoviesModel = require('../models/MoviesModel.js');

const getMovies = (req, res) => {
  MoviesModel.getMovies((err, movies) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send(movies);
    }
  })
}

//const post
//dracula
module.exports.getMovies = getMovies;

