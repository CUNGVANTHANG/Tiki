import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modal.slice";
import searchReducer from "../features/search.slice";
import authReducer from "../features/auth.slice";
import bannersReducer from "../features/banners.service";

const store = configureStore({
  reducer: {
    banners: bannersReducer,
    auth: authReducer,
    search: searchReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
