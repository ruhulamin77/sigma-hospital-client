import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7050/' }),
    endpoints: (builder) => ({
        getBlog: builder.query({
            query: () => ({
                url: 'Blog',
                method: 'GET'
            }),
        }),
    }),
})

export const { useGetBlogQuery } = blogApi

// http://localhost:7050/
// https://shrouded-headland-44423.herokuapp.com/