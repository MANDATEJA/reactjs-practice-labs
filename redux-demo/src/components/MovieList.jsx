import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../state/movie-slice';

const MovieList = () => {
  // useSelector hook takes a function as argument, the function takes state as argumet
  // Here state.movies -> is name of reducer
  // state.movies.movies -> name of one of the state object
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  }

  return (
    <div>
      Movie List
      <ul>
        { movies.map((movie) => (
          <div key={movie.id}>
            <span>{movie.name}</span>
            <button onClick={() => {handleRemoveMovie(movie.id)}}>Remove Movie</button>
          </div>
        ))}
      </ul>

    </div>
  );
}

export default MovieList;
