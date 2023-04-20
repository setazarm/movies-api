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
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      maxWidth: '80%',
      margin: '0 auto'
    }}>
      {movies.map(movie => {
        return (
          <div key={movie._id} style={{
            width: '23%',
            marginBottom: '1rem'
          }}>
            <img src={movie.Poster} alt={movie.Title} style={{
              width: '100%',
              borderRadius: '0.5rem'
            }} />
            <h4 style={{ marginTop: '0.5rem' }}>{movie.Title}</h4>
            <button onClick={() => handleAddToFavorite(movie._id)}>Add to favorite</button>
          </div>
        )
      })}
    </div>
    
    
  )
}

export default MovieCard