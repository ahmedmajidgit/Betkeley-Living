import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithoutAuth } from "../api";

export const homeAPI = createApi({
  reducerPath: "homeAPI",
  baseQuery: baseQueryWithoutAuth, // Set default base query to the one with auth headers

  endpoints: (builder) => ({
    // getRecommendationsData: builder.query({
    //   query: ({ type = "recommended-noauth" }) => ({
    //     url: `/realestates/${type}`,
    //     method: "GET",
    //     // params: type,
    //   }),
    // }),
    getRealEstates: builder.query({
      query: ({ type = "last5/Casale" }) => ({
        url: `/realestates/${type}`,
        method: "GET",
        // params: type,
      }),
    }),
    getBlogs: builder.query({
      query: ({}) => ({
        url: `/blog/articles`,
        method: "GET",
        // params: type,
      }),
    }),
    getCities: builder.query({
      query: ({ query }) => ({
        url: `/comuni/GetComune?query=${query}`,
        method: "GET",
        // params: type,
      }),
    }),

    // https://api.luliex.com/comuni/GetComune?query=Rom
  }),
});

export const { useGetRealEstatesQuery, useGetBlogsQuery, useGetCitiesQuery } = homeAPI;
