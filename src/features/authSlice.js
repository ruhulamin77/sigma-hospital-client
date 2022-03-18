import { createSlice } from '@reduxjs/toolkit'
const initialState = {};

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      saveUser: (state, action) => {
      state.auth = action.payload;   
      },
      removeUser:(state, action)=>{
        state.auth = {}
        localStorage.removeItem("user")
      }
    }
});

export const { saveUser, removeUser } = authSlice.actions;

export default authSlice.reducer;