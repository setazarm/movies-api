
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import MovieCard from './components/MovieCard'
import Register from './components/Register'
function App() {
  
  return (
    
    <BrowserRouter>
    <div className="App">
      <Routes>
<Route path="/" element={<LoginForm/>} />
<Route path="/register" element={ <Register/>} />
<Route path="/movies" element={<MovieCard/>} />
    
     
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
