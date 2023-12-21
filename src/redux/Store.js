import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./features/userSlice";

const Store= configureStore({
    reducer:{
        user: userSliceReducer,
    },
});

export default Store;