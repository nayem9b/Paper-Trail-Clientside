/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/api/v1/books",
      providesTags: ["books"],
    }),
    getSearchedBooks: builder.query({
      query: (term) => `/api/v1/books/?searchTerm=${term}`,
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/api/v1/books/${id}`,
      providesTags: ["books"],
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: "/api/v1/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    updateReview: builder.mutation({
      query: ({ id, reviews }) => ({
        url: `/api/v1/comment/${id}`,
        method: "PATCH",
        body: reviews,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/api/v1/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostBookMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useUpdateReviewMutation,
  useGetSearchedBooksQuery,
} = productApi;
