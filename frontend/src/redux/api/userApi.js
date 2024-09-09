import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => `/me`,
    }),
  }),
});

export const { useGetMeQuery } = userApi;
