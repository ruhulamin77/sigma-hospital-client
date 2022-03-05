import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  token: "",
  photoURL: "",
  adminEmail: "",
  adminName: "",  
  role: "",
  loading: false,
  error: ""
};

export const adminRegister = createAsyncThunk(
    'registerAdminFetch',
    async (body)=>{
      fetch('https://shrouded-headland-44423.herokuapp.com/adminRegistar', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(body)
      })
    }
)
export const adminLogin = createAsyncThunk(
    'adminLoginFetch',
    async (body)=>{
       fetch('https://shrouded-headland-44423.herokuapp.com/adminLogin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(body)
      })  
    }
)
const adminSlice = createSlice({
    name:"adminaccess",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.token = localStorage.getItem('token')
        },
        logout:(state,action)=>{
            state.token = ""
            localStorage.removeItem('token')
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
              localStorage.setItem('token',token)
            }
          },
    }

})

export const { login, logout } = adminSlice.actions;

export default adminSlice.reducer;