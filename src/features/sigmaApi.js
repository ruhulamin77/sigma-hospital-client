import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sigmaApi = createApi({
    reducerPath: 'sigmaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://shrouded-headland-44423.herokuapp.com/' }),
    endpoints: (builder) => ({
        getDoctors: builder.query({
            query: () => ({
                url: 'doctors',
                method: 'GET'
            }),
        }),
    }),
})

export const { useGetDoctorsQuery } = sigmaApi

// http://localhost:7050/
// https://shrouded-headland-44423.herokuapp.com/