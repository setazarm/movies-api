import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../context/context';

export default function Profile() {
  const { user, setUser } = useContext(MyContext);

  const logoutUser = () => {
    localStorage.removeItem('token');
    setUser(null);
  };


  if (user) {
    return (
      <div>
        <h1>Profile</h1>
        <div>
          {user && (
            <>
              <h2>{user.name}</h2>
              <h3>Favorite Movies:</h3>
              <ul>
                {user.favoriteMovies.map((movie) => (
                  <li key={movie.id}>{movie.Title}</li>
                ))}
              </ul>
            </>
          )}
          <button onClick={logoutUser}>logout</button>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
}
