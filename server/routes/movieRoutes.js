import {Router} from "express"
import {auth} from "../middleware/auth.js"
import { getAllMovies,getMovieById,createMovie,updateMovie,deleteMovie } from "../controllers/movieController.js";
import { isAdmin } from "../middleware/isAdmin.js";


const router =Router();

// Routes for the movie
router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/',auth,isAdmin, createMovie);
router.put('/:id',auth,isAdmin,  updateMovie);
router.delete('/:id',auth,isAdmin, deleteMovie);

export default router