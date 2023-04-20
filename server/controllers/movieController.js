import Movie from "../models/movieSchema.js"


export const getAllMovies = async (req, res) => {
    try {
        const {year,director}=req.query
        //console.log(year,director)
        if(year){
            let numberYear=Number(year)
            const movies = await Movie.find({Year:numberYear});
        res.json(movies);
        }else if(director){
            const movies = await Movie.find({Director:director});
            res.json(movies);
        }else{
            const movies = await Movie.find();
            res.json(movies);
        }
       
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getMovieById = async (req, res) => {
    try {
        const {id}= req.params
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        const savedMovie = await movie.save();
        res.json(savedMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


export const deleteMovie=async(req,res)=>{
    try{
        const {id}=req.params
        const deletedMovie=await Movie.findByIdAndRemove(id)
        res.json(deletedMovie)

    }catch (err) {
        res.status(400).json({ message: err.message });
    }
}