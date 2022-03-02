import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    role: "",
    loading: false,
    error: ""
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
      saveAdmin: (state, action) => {
      state.value = action.payload;
    },
    }
});

export const { saveAdmin } = adminSlice.actions;

export default adminSlice.reducer;