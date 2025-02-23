import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: []
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovie and removeMovie are actions to interact with state
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action) => {}
  }
});

export const { addMovie, removeMovie } = movieSlice.actions;
// exporting the reducer to add it to store configurer
export default movieSlice.reducer;
