import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "./appThunk";

export const initialState = {
  appLoading: true,
  token: null,
  expires_in: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuth.pending, (state) => {
      state.appLoading = true;
    });
    builder.addCase(getAuth.fulfilled, (state, action) => {
      const { access_token, expires_in } = action.payload;
      state.appLoading = false;
      state.token = access_token;
      state.expires_in = expires_in;
    });
    builder.addCase(getAuth.rejected, (state, action) => {
      console.log("action", action);
      state.appLoading = false;
    });
  },
});

export const { setAccessToken } = appSlice.actions;

export const appSelector = (state) => state.app;
