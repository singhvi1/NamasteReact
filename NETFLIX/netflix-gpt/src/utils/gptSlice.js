import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames:null,
    movieResults:null,
    loading: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult:(state,action)=>{
      const {movieNames,movieResults}=action.payload
      state.movieNames=movieNames;
      state.movieResults=movieResults;  
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearMovies:(state)=>{
      state.movieNames=null;
      state.movieResults=null; 
    }
  },
});
export const { toggleGptSearchView ,addGptMoviesResult,setLoading,clearMovies} = gptSlice.actions;
export default gptSlice.reducer;
