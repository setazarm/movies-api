import React from 'react'

const Documentation = () => {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: '1rem',
      borderRadius: '0.5rem'
    }}>
      <h1 style={{ marginBottom: '1rem' }}>Movies-api</h1>
      <p style={{ marginBottom: '1rem', textAlign: 'center' }}>This is a simple RESTful API and full stack app that provides information about movies. Users can access the data using the following endpoints:</p>
      <h3 style={{ marginBottom: '1rem' }}>base url: http://localhost:4000</h3>
      <h2 style={{ marginBottom: '1rem' }}>Endpoints</h2>
      <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
        <li style={{ marginBottom: '0.5rem' }}>GET /movies: Returns a list of all movies.</li>
        <li style={{ marginBottom: '0.5rem' }}>GET /movies?director=(directorname): Returns a list of movies directed by the specified director.</li>
        <li style={{ marginBottom: '1rem' }}>GET /movies?year=(year): Returns a list of movies released in the specified year.</li>
      </ul>
      <h2 style={{ marginBottom: '1rem' }}>Authentication</h2>
      <p style={{ textAlign: 'center' }}>To access the API, users must first create an account. Once authenticated, users can browse the list of movies and perform actions such as adding movies to their list of favorites or retrieving their favorite movies.</p>
    </div>
  )
}

export default Documentation