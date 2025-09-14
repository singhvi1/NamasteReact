import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from './movieSlice'



const appStore = configureStore(
    {
        reducer:{
            user:userReducer,    //<-----userSlice.reducer
            movies:moviesReducer,    //<-----movieSLice.reducer
        },
    }
);

export default appStore;
