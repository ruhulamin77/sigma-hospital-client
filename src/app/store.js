import { configureStore } from "@reduxjs/toolkit";
import reducer from '../features/userSlice';

export const store = configureStore({
    reducer: {
        user: reducer
    }
})