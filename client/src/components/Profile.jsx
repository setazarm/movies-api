import React, { useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { MyContext } from '../context/context';

export default function Profile() {
  const { user, setUser } = useContext(MyContext);

  const logoutUser = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  if (user) {
    return (
      <div style={{listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
        <h1 style={{ marginBottom: '1rem' }}>Profile</h1>
        <div style={{ width: '50%', textAlign: 'center' }}>
          {user && (
            <>
              <h2>{user.name}</h2>
              <h3>Favorite Movies:</h3>
              <ul>
                {user?.favoriteMovies.map((movie) => (
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
