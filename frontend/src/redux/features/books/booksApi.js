import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/baseUrl';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/books`,
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
  tagTypes: ['Books'], // Define the tag type
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/',
      providesTags: ["Books"]
    }),
    getBookById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{type: 'Books', id}]
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: '/',
        method: 'POST',
        body: newBook,
      }),
      invalidatesTags: ["Books"]
    }),
    updateBook: builder.mutation({
      query: ({ id, ...updateData }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: updateData,
        headers: { 'Content-Type:' : 'application-json' }
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Books', id }]
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,  // Adjust to `/books/${id}` if your API expects this path
        method: 'DELETE',
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const { useGetBooksQuery, useGetBookByIdQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation } = bookApi;
