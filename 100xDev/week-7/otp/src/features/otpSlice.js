import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otp: null,
};

export const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    addOtp: (state, action) => {
      const newOtp = action.payload;
      state.otp = newOtp;
    },
    deleteOtp: (state, action) => {
      state.otp = null;
    },
  },
});

export const { addOtp, deleteOtp } = otpSlice.actions;

export default otpSlice.reducer;
