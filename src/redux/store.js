import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../redux/ToggleSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});
