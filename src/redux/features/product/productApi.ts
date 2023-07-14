/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/api/v1/books",
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: "/api/v1/books",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBooksQuery, usePostBookMutation } = productApi;
