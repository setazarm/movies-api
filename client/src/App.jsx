
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MovieCard from './components/MovieCard'
import Register from './components/Register'
function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
     <Register/>
     <MovieCard/>
    </div>
    </BrowserRouter>
  )
}

export default App
