/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/api/v1/books",
    }),
    getSingleBook: builder.query({
      query: (id) => `/api/v1/books/${id}`,
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: "/api/v1/books",
        method: "POST",
        body: data,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostBookMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
} = productApi;
