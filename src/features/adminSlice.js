import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { adminData } from './helpers/adminFetch';
import Swal from 'sweetalert2';

const initialState = { admin: localStorage.getItem("admin") ? JSON.parse(localStorage.getItem("admin")) : {} };

export const adminRegister = createAsyncThunk(
    'adminRegister',
    async (body)=>{
       const result =  await adminData('https://shrouded-headland-44423.herokuapp.com/adminRegistar',body)
       return result
    }
)
export const adminLogin = createAsyncThunk(
    'adminLogin',
    async (body)=>{
       const result =  await adminData('https://shrouded-headland-44423.herokuapp.com/adminLogin',body)
       return result
    }
)
const adminSlice = createSlice({
    name:"adminaccess",
    initialState,
    reducers:{
        login:(state,action)=>{
          state.admin = JSON.parse(localStorage.getItem("admin"))
        },
        logOut:(state,action)=>{
            state.admin = {}
            localStorage.removeItem("admin")
        }
    },
    extraReducers:{
        [adminRegister.fulfilled]:(state,{payload:{error,message}})=>{
          state.loading = false
          if(error){
              state.error =error
          }else{
              state.error = message
          }
        },
        [adminRegister.pending]:(state,action)=>{
            state.loading = true
        },
        [adminLogin.pending]:(state,action)=>{
            state.loading = true
        },
        [adminLogin.fulfilled]:(state,{payload:{error,token, displayName, photoURL, role, adminEmail}})=>{
            state.loading = false
            if(error){
                state.error = error
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: error,
                    showConfirmButton: false,
                    timer: 1500
                })
            }else{
                state.admin = { token: token, displayName: displayName, photoURL: photoURL, adminEmail: adminEmail, role: role }
                localStorage.setItem('admin', JSON.stringify({ token: token, displayName: displayName, photoURL: photoURL, adminEmail: adminEmail, role: role }))
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
          },
    }

})

export const { login, logOut } = adminSlice.actions;

export default adminSlice.reducer;