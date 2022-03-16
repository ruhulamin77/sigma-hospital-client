import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { adminData } from './helpers/adminFetch';

const initialState = localStorage.getItem("admin") ? JSON.parse(localStorage.getItem("admin")): {};

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
                state.error =error
            }else{
              state.token = token
              state.adminName = displayName
              state.adminEmail = adminEmail
              state.photoURL = photoURL
              state.role = role
              localStorage.setItem('admin', JSON.stringify(state))
            }
          },
    }

})

export const { login, logOut } = adminSlice.actions;

export default adminSlice.reducer;