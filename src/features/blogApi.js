import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sigma-hospital-server.onrender.com/',
  }),
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => ({
        url: 'Blog',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetBlogQuery } = blogApi;

// https://sigma-hospital-server.onrender.com
// https://sigma-hospital-server.onrender.com/
