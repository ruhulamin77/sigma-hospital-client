import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")): {};

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      saveUser: (state, action) => {
      state.auth = action.payload;
    },
    }
});

export const { saveUser } = authSlice.actions;

export default authSlice.reducer;