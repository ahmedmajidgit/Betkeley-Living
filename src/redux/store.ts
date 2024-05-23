import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { homeAPI } from "./services/homeApi";
import  settingSlice  from "./slices/settingSlice";

export const store = configureStore({
  reducer: {
    // auth,
    settingSlice,
    [homeAPI.reducerPath]: homeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeAPI.middleware),
});
setupListeners(store.dispatch);
