import { createSlice } from "@reduxjs/toolkit";
import { json } from "stream/consumers";

const initialState = {
  // dark:
  //   typeof window !== "undefined"
  //     ? localStorage.getItem("mode")
  //       ? Boolean(JSON.parse(localStorage.getItem("mode") as string))
  //       : false
  //     : false,
  // dark: true 
  dark: typeof window !== "undefined" ? true : true
};

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.dark = true;
      localStorage.setItem("mode", JSON.stringify(true));
      // state.dark = true;
    },
  },
  extraReducers: (builder) => {},
});

export const { toggleMode } = settingSlice.actions;

export default settingSlice.reducer;
