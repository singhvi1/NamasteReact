import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
const appStore = configureStore(
    {
        reducer:{
            user:userReducer,    //<-----userSlice.reducer
        },
    }
);

export default appStore;
