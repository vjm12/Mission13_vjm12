import { useState } from 'react';
import data from './MovieData.json';
//Have all movie data in a table
const movies = data.MovieData;

function MovieList() {
  //For adding movies to the table
  //const [listofmovies, setlistofmovies] = useState(movies);
  //const addMovie = () => {
  //setlistofmovies([
  //...movies,
  //{
  //Category: 'Adventure',
  //Title: 'The Princess Bride',
  //Year: '1987',
  //Director: 'Rob Reiner',
  //Rating: 'PG',
  //Edited: 'No',
  // },
  //]);
  //};
  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Year</th> <th>Title</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => (
              <tr>
                <td>{m.Title}</td> <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MovieList;
