import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import adminReducer from '../features/adminSlice'
import authReducer from '../features/authSlice'
import { blogApi } from '../features/blogApi'
import cartReducer, { getTotals } from '../features/cartSlice'
import { sigmaApi } from '../features/sigmaApi'

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