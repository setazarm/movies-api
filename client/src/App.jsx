
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Documentation from './components/Documentation'
import LoginForm from './components/LoginForm'
import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar'
import Register from './components/Register'
 import Profile from './components/Profile'
function App() {
  
  return (
    
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
<Route path="/" element={<LoginForm/>} />
<Route path="/register" element={<Register/>}/>
<Route path="/movies" element={<MovieCard/>} />
<Route path="/documentation" element={<Documentation/>} />
<Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
