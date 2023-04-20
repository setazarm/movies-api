
import {NavLink} from "react-router-dom"
import { useContext } from 'react'
import { MyContext } from '../context/context'

export default function Navbar() {
  const { user,setUser} = useContext(MyContext);
 if(user){
  return (

    <nav>
      <ul>
      <li><NavLink to="/">Home </NavLink></li>
        <li><NavLink to="/register">Register </NavLink></li>
        <li><NavLink to="/documentation">Documentation </NavLink></li>
        <li><NavLink to="/movies">Movies </NavLink></li>
        <li><NavLink to="/profile">profile </NavLink></li>
      </ul>
    </nav>
  )
 }else{
  <nav>
  <ul>
      <li><NavLink to="/">Home </NavLink></li>
        <li><NavLink to="/register">Register </NavLink></li>
        <li><NavLink to="/documentation">Documentation </NavLink></li>
  </ul>
  </nav>
 }
}
