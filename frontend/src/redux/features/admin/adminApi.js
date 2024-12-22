import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/baseUrl';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/admin`,
    prepareHeaders: (headers, { getState }) => {
      // Get token from the state (or any other storage)
      // const token = getState().auth?.token;
      const token = localStorage.getItem('token');

      // If a token exists, include it in the headers
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['AdminStats'], // Define the tag type
  endpoints: (builder) => ({
    getAdminStats: builder.query({
      query: () => '/',
      providesTags: ["AdminStats"]
    })
  }),
});

export const { useGetAdminStatsQuery } = adminApi;
