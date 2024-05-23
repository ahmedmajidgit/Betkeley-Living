import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithoutAuth } from "../api";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: baseQueryWithoutAuth, // Set default base query to the one with auth headers
  endpoints: (builder) => ({
    // loginUser: builder.mutation({
    //   query: (credentials) => ({
    //     url: "/login",
    //     method: "POST",
    //     body: credentials,
    //   }),
    // }),

    // RegisterInterpreter: builder.mutation({
    //   query: (payload) => ({
    //     url: "/register",
    //     method: "POST",
    //     body: { ...payload, role: "interpreter" },
    //   }),
    // }),
  }),
});

export const {  } = authAPI;
