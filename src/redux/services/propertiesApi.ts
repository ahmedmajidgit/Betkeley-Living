import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "../api";

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: baseQuery, // Set default base query to the one with auth headers

  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => `/properties/get`,
    }),
  }),
});

export const { useGetPropertiesQuery } = propertiesApi;
