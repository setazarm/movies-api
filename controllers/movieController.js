import Movie from "../models/movieSchema.js";

const moveController = {

    // Get all movies
    getAllMovies: async (req, res) => {
        try {
            const movies = await Movie.find();
            res.status(200).json({success: true, data: movies});
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Get a movie by id
    getMovieById: async (req, res) => {
        try {
            const movie = await Movie.findById(req.params.id);
            res.status(200).json({success: true, data: movie});
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Add a new movie
    createMovie: async (req, res) => {
        try {
            const movie = await Movie.create(req.body);
            res.status(201).json({success: true, data: movie});
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },

    // Update a movie by ID
    updateMovieById: async (req, res) => {
        try {
            const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
                });
            res.status(200).json({success: true, data: movie});
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });

        }
    },

    // Delete a movie by ID
    deleteMovieById: async (req, res) => {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json({success: true, data: movie});
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};

export default moveController;

