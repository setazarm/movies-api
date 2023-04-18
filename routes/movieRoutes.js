import { Router } from 'express';
import { getAllMovies, getMovieById, createMovie, updateMovieById, deleteMovieById } from '../controllers/movieController.js';

const router = Router();

// Routes for the movie
router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);
router.put('/:id', updateMovieById);
router.delete('/:id', deleteMovieById);

export default router;