import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setAccessToken } = appSlice.actions;

export const appSelector = (state) => state.app;
