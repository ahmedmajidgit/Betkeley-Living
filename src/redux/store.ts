import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { homeAPI } from "./services/homeApi";
import { propertiesApi } from "./services/propertiesApi";
import  settingSlice  from "./slices/settingSlice";

export const store = configureStore({
  reducer: {
    // auth,
    settingSlice,
    [homeAPI.reducerPath]: homeAPI.reducer,
    [propertiesApi.reducerPath]: propertiesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeAPI.middleware, propertiesApi.middleware),
});
setupListeners(store.dispatch);
