import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { sigmaApi } from '../features/sigmaApi'
import authReducer from '../features/authSlice'
import adminReducer from '../features/adminSlice'
import cartReducer, { getTotals } from '../features/cartSlice';
import { blogApi } from '../features/blogApi';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        admin: adminReducer,
        cart: cartReducer,
        [sigmaApi.reducerPath]: sigmaApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sigmaApi.middleware, blogApi.middleware),
        
})
store.dispatch(getTotals());
setupListeners(store.dispatch)