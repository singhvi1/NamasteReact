import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        HorrorMovies:null,
        SciFiMovies:null,
        AnimationMovies:null,
        trailerVideo : null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addHorrorMovies:(state,action)=>{
            state.HorrorMovies=action.payload
        },
        addSciFiMovies:(state,action)=>{
            state.SciFiMovies=action.payload
        },
        addAnimationMovies:(state,action)=>{
            state.AnimationMovies=action.payload
        },

        addTrailerVideo:(state, action)=>{
            state.trailerVideo=action.payload
        },
    }
})

export const {addNowPlayingMovies,addPopularMovies,addHorrorMovies,addSciFiMovies,addAnimationMovies,addTrailerVideo}=movieSlice.actions
export default movieSlice.reducer;