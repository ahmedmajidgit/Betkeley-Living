import { fetchBaseQuery } from "@reduxjs/toolkit/query";

// Base query function without authorization headers
export const baseQueryWithoutAuth = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
});

// Base query function with authorization headers
// export const baseQueryWithAuth = fetchBaseQuery({
//   baseUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.tokens?.access?.token;
//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// prepareHeaders: async (headers) => {
//   const session = await getSession();
//   console.log("auth==>", session.user.accessToken);
//   if (session?.user?.accessToken) {
//     headers.set("Authorization", `Bearer ${session.user.accessToken}`);
//   }
//   return headers;
// },
// });
