
import {NavLink} from "react-router-dom"
import { useContext } from 'react'
import { MyContext } from '../context/context'

export default function Navbar() {
  const { user,setUser} = useContext(MyContext);
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px"
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginRight: "10px"
  };

  if(user){
    return (
      <nav style={navStyle}>
        <div>
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/register" style={linkStyle}>Register</NavLink>
          <NavLink to="/documentation" style={linkStyle}>Documentation</NavLink>
          <NavLink to="/movies" style={linkStyle}>Movies</NavLink>
        </div>
        <div>
          <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
        </div>
      </nav>
    )
  } else {
    return (
      <nav style={navStyle}>
        <div>
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/register" style={linkStyle}>Register</NavLink>
          <NavLink to="/documentation" style={linkStyle}>Documentation</NavLink>
        </div>
      </nav>
    )
  }
}




