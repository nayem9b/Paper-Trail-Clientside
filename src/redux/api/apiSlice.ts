import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://papertrailserver-nayem9b.vercel.app",
  }),
  tagTypes: ["books", "wishlist"],
  endpoints: () => ({}),
});
