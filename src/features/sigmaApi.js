import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sigmaApi = createApi({
  reducerPath: 'sigmaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sigma-hospital-server.onrender.com/',
  }),
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => ({
        url: 'doctors',
        method: 'GET',
      }),
    }),
    getNurses: builder.query({
      query: () => ({
        url: 'nurses',
        method: 'GET',
      }),
    }),
    getAppointments: builder.query({
      query: () => ({
        url: 'appointments',
        method: 'GET',
      }),
    }),
    getPrescriptions: builder.query({
      query: () => ({
        url: 'prescriptions',
        method: 'GET',
      }),
    }),
    getBloodRequest: builder.query({
      query: () => ({
        url: 'bloodRequest',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useGetNursesQuery,
  useGetAppointmentsQuery,
  useGetPrescriptionsQuery,
  useGetBloodRequestQuery,
} = sigmaApi;

// https://sigma-hospital-server.onrender.com
// https://sigma-hospital-server.onrender.com
