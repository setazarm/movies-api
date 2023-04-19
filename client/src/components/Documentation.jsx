import React from 'react'

const Documentation = () => {
  return (
    <div>
    <h1>movies-api</h1>
    <p>This is a simple RESTful API and full stack app that provides information about movies. Users can access the data using the following endpoints:</p>
    <h3>base url: http://localhost:4000</h3>
    <h2>Endpoints</h2>
    <ul>
      <li>GET /movies: Returns a list of all movies.</li>
      <li>GET /movies?director=(directorname): Returns a list of movies directed by the specified director.</li>
      <li>GET /movies?year=(year): Returns a list of movies released in the specified year.</li>
    </ul>
    <h2>Authentication</h2>
    <p>To access the API, users must first create an account. Once authenticated, users can browse the list of movies and perform actions such as adding movies to their list of favorites or retrieving their favorite movies.</p>
  </div>
  )
}

export default Documentation