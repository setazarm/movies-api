import {useState,useEffect} from 'react'
import axios from "axios"
const MovieCard = () => {
    const [movies,setMovies] =useState([])
  
    useEffect(()=>{
        axios.get("http://localhost:4000/movies")
        .then(res=>{
          
            setMovies(res.data)
        })
    },[])

    const handleAddToFavorite = (movieId) => {
     // fetch(`http://localhost:4000/users/fav/${movieId}`,)
   console.log(movieId)
        axios.get(`http://localhost:4000/users/fav/${movieId}`, {
           headers:{"token":localStorage.getItem("token"),"Content-Type":"text/plain"}
        }).then(res => {
          
        }).catch(error => {
            console.log(error)
        })
    }
  return (
    <div>MovieCard
        {movies.map(movie=>{
          return(  
            <div>
          <img src={movie.Poster} alt="" />
            <h4>{movie.Title}</h4>
            <button onClick={()=>handleAddToFavorite(movie._id)}>Add to favorite</button>
            </div>
          )
        })}

    </div>
  )
}

export default MovieCard