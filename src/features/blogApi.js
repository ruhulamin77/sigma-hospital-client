import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://shrouded-headland-44423.herokuapp.com/' }),
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

// https://shrouded-headland-44423.herokuapp.com
// https://shrouded-headland-44423.herokuapp.com/