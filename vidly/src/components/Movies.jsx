import { useState } from "react";
import {getMovies} from "../fakeMovieService"
const movies = getMovies();

function Movies() {
  const [movieList, setMovieList] = useState(movies);

  function handleDeleteMovie(movie) {
    setMovieList((prevMovies) => {
      const updatedMovies = prevMovies.filter((m) => m._id != movie._id);
      return updatedMovies;
    });
  }
  return (
    <>
      {movieList.length == 0 ? (
        <p className="m-2 p-3 text-stone-900">There are no movies in the database.</p>
      ) : (
        <div>
          <p className="my-3 p-3 text-stone-900">
            Showing {movieList.length} movies in the database.
          </p>
          <div className="mx-5">
            <table className="table-fixed w-full">
              <thead className="bg-teal-100">
                <tr className="border-b-1 text-left">
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {movieList.map((movie) => (
                  <tr key={movie._id} className="border-b-1 border-stone-300 ">
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteMovie(movie)}
                        className="bg-rose-500 px-2 rounded-sm text-white hover:bg-red-400 hover:text-md "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Movies;
