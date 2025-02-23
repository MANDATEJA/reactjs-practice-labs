import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [
    {
      id: 1,
      name: "Intersteller"
    },
    {
      id: 2,
      name: "Spectre"
    }
  ]
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovie and removeMovie are actions to interact with state
    addMovie: (state, action) => {
      const newMovie = {
        id: state.movies.length + 1,
        name: action.payload
      }
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    }
  }
});

export const { addMovie, removeMovie } = movieSlice.actions;
// exporting the reducer to add it to store configurer
export default movieSlice.reducer;
