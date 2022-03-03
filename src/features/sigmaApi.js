import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sigmaApi = createApi({
  reducerPath: "sigmaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7050/",
  }),
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => ({
        url: "doctors",
        method: "GET",
      }),
    }),
    getNurses: builder.query({
      query: () => ({
        url: "nurses",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDoctorsQuery, useGetNursesQuery } = sigmaApi;

// http://localhost:7050/
// https://shrouded-headland-44423.herokuapp.com/
