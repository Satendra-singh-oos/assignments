import { configureStore } from "@reduxjs/toolkit";
import otpSlice from "../features/otpSlice";

export const store = configureStore({
  reducer: otpSlice,
});
