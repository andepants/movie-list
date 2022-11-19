const express = require('express');
const MoviesController = require('./controllers/MoviesControllers.js');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
//app.use(express.urlencoded());
//app.use(express.json());

//router
var router = require('./routers.js');

//setting up routes???
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

