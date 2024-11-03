import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/baseUrl';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,
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
  tagTypes: ['Orders'], // Define the tag type
  endpoints: (builder) => ({
    
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: '/',
        method: 'POST',
        body: newOrder,
      }),
    }),
  }),
});

export const {  useCreateOrderMutation } = ordersApi;
