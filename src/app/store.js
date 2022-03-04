import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { sigmaApi } from '../features/sigmaApi'
import authReducer from '../features/authSlice'
import cartReducer, { getTotals } from '../features/cartSlice';
import { blogApi } from '../features/blogApi';

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        auth: authReducer,
        cart: cartReducer,
        [sigmaApi.reducerPath]: sigmaApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sigmaApi.middleware, blogApi.middleware),
        
})
store.dispatch(getTotals());
setupListeners(store.dispatch)