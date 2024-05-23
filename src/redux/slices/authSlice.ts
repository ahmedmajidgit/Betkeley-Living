import { createSlice } from "@reduxjs/toolkit";

const user =
  typeof window !== "undefined"
    ? localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null
    : null;

const tokens =
  typeof window !== "undefined"
    ? localStorage.getItem("tokens")
      ? JSON.parse(localStorage.getItem("tokens") as string)
      : null
    : null;

const initialState = {
  user,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // logout: (state) => {
    //   state.user = null;
    // },
  },
  extraReducers: (builder) => {},
});

export const {} = slice.actions;

export default slice.reducer;
