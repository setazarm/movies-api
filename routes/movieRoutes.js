const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

// Routes for the movie
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;