const controller = require('./controllers/MoviesControllers.js')
const router = require('express').Router();

//connect controller methods to corresponding routes
router.get('/api/movies', controller.getMovies);

//exmaple of post
//router.post('api/movies', controller.postMovies);

// app.get('/api/movies', (req, res) => {
//   console.log('hello');
//   MoviesController(req, res);
// })

module.exports = router;