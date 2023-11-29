import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    TrailerVideo: null,
    popularMovies: null,
    topRatedVideo: null,
    upComingMovies:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.TrailerVideo = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedVideo = action.payload;
    },
    addUpComingMovies:(state,action)=>{
      state.upComingMovies=action.payload;
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies ,addTopRatedMovies ,addUpComingMovies} =
  moviesSlice.actions;

export default moviesSlice.reducer;
