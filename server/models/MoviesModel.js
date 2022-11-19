const db = require('../db');

const getMovies = (callback) => {
  const q = 'select * from movies';
  db.query(q, callback);
}

module.exports = {getMovies};