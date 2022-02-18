import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { sigmaApi } from '../features/sigmaApi'

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [sigmaApi.reducerPath]: sigmaApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sigmaApi.middleware),
})

setupListeners(store.dispatch)