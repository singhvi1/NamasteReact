import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from './movieSlice'
import gptReducer from './gptSlice'
import configReducer from './configSlice'


const appStore = configureStore(
    {
        reducer:{
            user:userReducer,    //<-----userSlice.reducer
            movies:moviesReducer,    //<-----movieSLice.reducer
            gpt:gptReducer,             //<-------gptSlice.reducer
            config:configReducer            //<-------configSlice.reducer 
        },
    }
);

export default appStore;
