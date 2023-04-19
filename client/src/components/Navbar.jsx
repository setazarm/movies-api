import React, { useContext } from 'react'
import {NavLink} from "react-router-dom"


export default function Navbar() {
 
  return (
    <nav>
      <ul>
       
        <li><NavLink to="/register">Register </NavLink></li>
      </ul>
    </nav>
  )
}
